import './App.css';
import { Header } from './components/Header/Header';
 import { Hero } from './components/hero/Hero';
import { CardsGrid } from './components/CardsGrid/CardsGrid';
// import { Footer } from './components/Footer/Footer';


function App() {
  return (
   <>
    <Header />
    <Hero /> 
    <CardsGrid />
    {/* <Footer /> */}
   </>
  );
}

export default App;
