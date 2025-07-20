import React from "react"; 
import { HeroSection, Content, Button} from "../Hero/Hero.styles";

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


