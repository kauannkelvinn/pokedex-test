import styled from "styled-components";

export const Card = styled.div.attrs(props => ({
    type: props.type
  }))`
    background-color: ${({ type }) => {
        switch (type) {
            case "grass": return "#defde0";
            case "fire": return "#fddfdf";
            case "water": return "#def3fd";
            case "bug": return "#f8d5a3";
            case "normal": return "#f5f5f5";
            case "poison": return "#e0b3ff";
            case "electric": return "#fcf7de";
            case "ground": return "#f4e7da";
            case "fairy": return "#fceaff";
            case "fighting": return "#e6e0d4";
            case "psychic": return "#eaeda1";
            case "rock": return "#d5d5d4";
            case "ghost": return "#d7c8f6";
            case "ice": return "#e0f5ff";
            case "dragon": return "#97b3e6";
            default: return "#f0f0f0";
        };
    }};
    border: 3px solid #333;
    border-radius: 16px;
    padding: 1rem;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
            transform: translateY(-5px);
        }

        `;

export const PokemonImage = styled.img`
        width: 120px;
        height: 120px;
        image-rendering: pixelated;
        margin-bottom: 0.5rem;
        `;

export const PokemonName = styled.h2`
        font-size: 1.2rem;
        text-transform: capitalize;
        color: #222;
        margin: 0.3rem 0;
        `

export const PokemonDescription = styled.p`
        font-size: 0.85rem;
        text-align: center;
        color: #555;
        `
export const PokemonType = styled.p`
        font - size: 0.85rem;
        text-align: center;
        padding: 0.2rem 0.5rem;
        font-weight: bold;
        color: #555;
        `
