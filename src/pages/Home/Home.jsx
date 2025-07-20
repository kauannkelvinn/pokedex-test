import { Hero } from "../../components/Hero/Hero";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";
import { Main } from "../../App.styles";

export function Home() {
    return (
        <>
        <Main>
            <Hero />
        </Main>
        <CardsGrid />
        </>    
    )

}