import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import HeroSection from './Component/HeroSection';
import Navigation from './Component/Navigation';
import Card from './Component/Card';
import Footer from './Component/Footer';
import RecipeDetail from './Component/Recipe/RecipeDetail'; // New component you'll create

function App() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <HeroSection />
      <Navigation />

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
