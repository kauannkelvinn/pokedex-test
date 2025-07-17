import React from "react";
import { Card, PokemonImage, PokemonName, PokemonDescription, PokemonType } from "./PokemonCard.styles"

export function PokemonCard({ name, image, type, description, }) {
    return (
        <Card type={type}>
            <PokemonImage src={image} alt={name} />
            <PokemonName>{name}</PokemonName>
            <PokemonType>{type}</PokemonType>
            <PokemonDescription>{description}</PokemonDescription>
        </Card>
    )
};
