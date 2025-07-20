import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Grid, ButtonWrapper, ReloadButton } from "../CardsGrid/CardsGrid.styles";

export function CardsGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 18;

    async function fetchPokemons(offsetValue = 0) {
        try {
            setLoading(true);

            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offsetValue}`
            );
            const data = await response.json();

            const detailedPokemons = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const details = await res.json();

                    const speciesRes = await fetch(details.species.url);
                    const speciesData = await speciesRes.json();

                    const flavor = speciesData.flavor_text_entries.find(
                        (entry) => entry.language.name === "en"
                    );

                    const cleanDescription = flavor?.flavor_text
                        .replace(/[\f\n\r\t\u000c\^]/g, " ")
                        .replace(/\s+/g, " ")
                        .trim();

                    return {
                        name: details.name,
                        image: details.sprites.front_default,
                        description: cleanDescription || "No description available.",
                        type: details.types[0].type.name,
                    };
                })
            );

            setPokemons(detailedPokemons);
            setOffset(offsetValue);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemons(0);
    }, []);

    function handleReload() {
        const newOffset = offset + limit;
        fetchPokemons(newOffset);
    }

    return (
        <>
            <Grid id="cards">
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.image}
                        description={pokemon.description}
                        type={pokemon.type}
                    />
                ))}
            </Grid>
                <ButtonWrapper>
                    <ReloadButton onClick={handleReload} disabled={loading}>
                        {loading ? "Carregando..." : "Recarregar Pokémons"}
                    </ReloadButton>
                </ButtonWrapper>

        </>
    );
}



