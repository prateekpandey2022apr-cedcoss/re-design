import React, { useContext } from "react";
import DemoCarousel from "./components/DemoCarousel";
import PrimarnyNav from "./components/PrimaryNav";
import ProductList from "./ProductList";
import TopBar from "./components/TopBar";
import ShopContext from "./ShopContext";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function Home() {
  const { isSearchSubmit } = useContext(ShopContext);

  return (
    <>
      <TopBar />
      <PrimarnyNav />
      {!isSearchSubmit && <DemoCarousel />}
      <ProductList />
      <Offer />
      <Footer />
    </>
  );
}

export default Home;
