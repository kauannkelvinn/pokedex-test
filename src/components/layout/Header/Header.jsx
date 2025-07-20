import { useState } from "react";
import pokedexLogo from "../../../assets/images/pokedexlogo.png";
import { useLocation, useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === "/";


    const irParaHome = () => {
        navigate('/');

        setTimeout(() => {
            const el = document.getElementById("hero");
            el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <HeaderContainer>
            <Nav>
                <Logo>
                    <img onClick={irParaHome} src={pokedexLogo} alt="Pokédex Logo" />
                </Logo>

                <Burger onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </Burger>

                <Menu>
                    <a onClick={irParaHome} style={{ cursor: "pointer" }}>Home</a>
                    {isHome && (
                        <a href="#cards">Cards</a>
                    )}
                    <a href="#footer">Sobre</a>
                    <a href="https://www.linkedin.com/in/kauannkelvinn/" target="_blank" rel="noreferrer">Contato</a>
                </Menu>
            </Nav>

            <MobileMenu className={menuAberto ? "aberto" : ""}>
                <a onClick={irParaHome}>Home</a>
                {isHome && (
                    <a href="#cards">Cards</a>
                )}
                <a href="#footer">Sobre</a>
                <a href="https://www.linkedin.com/in/kauannkelvinn/" target="_blank" rel="noreferrer" onClick={toggleMenu}>Contato</a>
            </MobileMenu>
        </HeaderContainer>
    )
};

