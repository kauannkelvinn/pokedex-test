import React from "react";
import styled from "styled-components";

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

const FooterContainer = styled.footer`
    background: #2a75bb;
    color: #fff;
    text-align: center;
    padding: 2rem;
    margin-top: auto;

    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }

`

