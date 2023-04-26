import React from "react";
import Nav from "./Components/Nav";
import Header from './Components/Header';
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimony from "./Components/Testimony";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimony />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
