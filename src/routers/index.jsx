import { Routes, Route } from "react-router-dom";
import CardList from "../pages/CardData";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../layouts/MainLayout";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CardList />} />
        <Route path="recipe/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default Index;
