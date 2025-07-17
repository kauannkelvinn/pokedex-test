import './App.css';
import { Header } from './components/Header/Header';
 import { Hero  } from './components/Hero/Hero';
import { CardsGrid } from './components/CardsGrid/CardsGrid';
import { Footer } from './components/footer/Footer.jsx';


function App() {
  return (
   <>
    <Header />
    <Hero /> 
    <CardsGrid />
    <Footer />
   </>
  );
}

export default App;
