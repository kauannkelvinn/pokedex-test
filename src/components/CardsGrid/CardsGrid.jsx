import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export function CardsGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 12;

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
            <Grid>
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.image}
                        description={pokemon.description}
                        type={pokemon.type}
                    />
                ))}
                <ButtonWrapper>
                    <ReloadButton onClick={handleReload} disabled={loading}>
                        {loading ? "Carregando..." : "Recarregar Pokémons"}
                    </ReloadButton>
                </ButtonWrapper>
            </Grid>

        </>
    );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  justify-items: center;
`;

const ButtonWrapper = styled.div`
  grid-column: 1 / -1; /* ocupa toda a linha */
  display: flex;
  justify-content: center;
`;

const ReloadButton = styled.button`
  margin: 2rem auto; /* auto nas laterais */
  display: block; /* força comportamento de bloco */
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background-color: #ef5350;
  color: white;
  transition: background-color 0.3s;

  grid-column: 1 / -1; /* ocupa toda a linha */

  &:hover:not(:disabled) {
    background-color: #d32f2f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

