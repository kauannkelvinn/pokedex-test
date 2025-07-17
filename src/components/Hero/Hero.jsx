import React from "react"; 
import styled from "styled-components";

export function Hero() {
    return (
        <HeroSection id="hero">
            <Content>
                <h1>Descubra, Colecione, Conquiste</h1>
                <p>Explore o universo Pokémon e encontre seus cards favoritos!</p>
                <Button href="#cards">Ver Cards</Button>
            </Content>
        </HeroSection>
    );
} 

const HeroSection = styled.section`
  background: linear-gradient(135deg, #2a75bb, #3b4cca);
  color: #fff;
  padding: 6rem 2rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: #ffcb05;
  color: #2a75bb;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #f5b800;
  }
`;
