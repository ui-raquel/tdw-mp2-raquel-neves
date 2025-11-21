import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import About from "./pages/About/About";
import AboutSG from "./pages/StudioGhibli/AboutSG";
import Species from "./pages/Species/Species";
import Characters from "./pages/Characters/Characters";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/StudioGhibli" element={<AboutSG />} />
        <Route path="/about" element={<About />} />
        <Route path="/species" element={<Species />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Layout>
  );
}

export default App;
