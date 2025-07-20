import React from "react";
import { FooterContainer } from "./Footer.styles";

export function Footer() {
    return(
        <FooterContainer id="footer">
            <p>© 2025 Pokémon. Todos os direitos reservados.</p>
            <p>
                Dados da API: <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéAPI</a>
            </p>
        </FooterContainer>
    )
}

