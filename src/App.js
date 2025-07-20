import { Header } from '../src/components/layout/Header/Header.jsx';
import { Hero } from '../src/components/Hero/Hero.jsx';
import { CardsGrid } from '../src/components/CardsGrid/CardsGrid.jsx';
import { Footer } from '../src/components/layout/Footer/Footer.jsx';
import { AppContainer, Main } from './App.styles.js';

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Main>
          <Hero />
        </Main>
        <CardsGrid />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
