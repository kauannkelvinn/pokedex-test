import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { AppContainer } from "./App.styles";
import { Home } from "./pages/Home/Home";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  return (
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
        <Footer />
      </AppContainer>
  );
}

export default App;