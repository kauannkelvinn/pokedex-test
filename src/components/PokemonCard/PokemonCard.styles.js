import styled from "styled-components";

export const Card = styled.div.attrs(props => ({
        type: props.type
}))`
        background-color: ${props => {
                switch (props.type) {
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
                }
        }};
        border: 3px solid #333;
        border-radius: 20px;
        width: 220px;
        padding: 1.5rem;
        box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.4s ease;
        cursor: pointer;

        &:hover {
                transform: scale(1.05);
        }
`;

export const PokemonImage = styled.img`
        width: 120px;
        height: 120px;
`;

export const PokemonName = styled.h3`
        
        margin-top: 1rem;
        font-size: 1.1rem;
        color: #333;
        text-shadow: 1px 1px 0px #fff;
`;

export const PokemonType = styled.span`
        font-size: 0.8rem;
        color: #fff;
        padding: 0.3rem 0.8rem;
        border-radius: 12px;
        background-color: #444;
        margin-top: 0.5rem;
`;

export const PokemonDescription = styled.p`
        font-family: 'Arial', sans-serif; 
        font-weight: bold;
        font-size: 0.9rem;
        line-height: 1.4;
        color: #222;
        margin-top: 0.8rem;
        text-align: center;
`;
