import { useState } from "react";
import pokedexLogo from "../../../assets/images/pokedexlogo.png";

import {
    HeaderContainer,
    Nav,
    Logo,
    Menu,
    Burger,
    MobileMenu
} from "./Header.styles";

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    }


    return (
        <HeaderContainer>
        <Nav>
            <Logo>
                <img src={pokedexLogo} alt="Pokédex Logo" />
            </Logo>

            <Burger onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </Burger>

            <Menu>
                <a href="#hero">Home</a>
                <a href="#cards">Cards</a>
                <a href="#footer">Sobre</a>
                <a href="https://www.linkedin.com/in/kauannkelvinn/" target="_blank" rel="noreferrer">Contato</a>
            </Menu>
        </Nav>

            <MobileMenu className={menuAberto ? "aberto" : ""}>
                <a href="#hero">Home</a>
                <a href="#cards">Cards</a>
                <a href="#footer">Sobre</a>
                <a href="https://www.linkedin.com/in/kauannkelvinn/" target="_blank" rel="noreferrer" onClick={toggleMenu}>Contato</a>
            </MobileMenu>
        </HeaderContainer>
    )
};

