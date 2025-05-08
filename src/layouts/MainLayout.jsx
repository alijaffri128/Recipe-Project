
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";

const MainLayout = () => {
  const location = useLocation(); // A hook to get the current route path (URL).
  const isDetailPage = location.pathname.startsWith("/recipe/"); // This checks if the current URL starts with /recipe/.

  return (
    <>
      {/* Conditionally hide Header on detail page if needed */}
      {/* {!isDetailPage && <Header />} */}
      <Header/>
      <SearchBar />
      <HeroSection />
      <Navigation />
      {/* Where the child route component will render */}
      <Outlet /> 

      <Footer />
    </>
  );
};

export default MainLayout;
