import react from "react";
import styled from "styled-components";
import pokedexLogo from "../../assets/images/pokedexlogo.png";

export function Header() {
    return (
        <Nav>
            <Logo>
                <img src={pokedexLogo} alt="Pokédex Logo" />
            </Logo>
            <Menu>
                <a href="/">Home</a>
                <a href="/">Cards</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </Menu>
        </Nav>
    )
};

const Nav = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 2rem;
    background: #ffcb05;
    color #2a75bb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }


`

const Logo = styled.div`
    position: absolute;
    left: 2rem;
    top: 0%;
    transform: translateY();

    img {
        cursor: pointer;
        height: 120px;
        width: auto;
        display: block;
    }

    @media (max-width: 768px) {
    position: static;
    transform: none;

    img {
      height: 120px;
      display: block;
    }
  }
`

const Menu = styled.nav`
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: #2a75bb;
        font-weight: bold;
        
        
        &:hover {
            transform: translateY(-1px);
            transition: transform 0.2s ease-in-out;
        }
    }

    @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    a {
        display: none;
    }
  }
`
