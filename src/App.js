import { useState } from "react";
import "./App.css";
import About from "./components/About us/About";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Teams from "./components/Teams/Teams";
import Testamonials from "./components/Testamonials/Testamonials";

function App() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Menu />
      <Testamonials />
      {/* <Teams /> */}
      <Footer />
    </>
  );
}

export default App;
