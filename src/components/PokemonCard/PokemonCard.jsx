import React from "react";
import {
    Card,
    PokemonImage,
    PokemonName,
    PokemonType,
    PokemonDescription
} from "../PokemonCard/PokemonCard.styles";

export function PokemonCard({ image, name, type, description }) {
    return (
        <Card type={type}>
            <PokemonImage src={image} alt={name} />
            <PokemonName>{name}</PokemonName>
            <PokemonType>{type}</PokemonType>
            <PokemonDescription>{description}</PokemonDescription>
        </Card>
    );
}
