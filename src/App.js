import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimony from "./Components/Testimony";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimony />
      <Contact />
      <Footer author="Elyas Abebe" />
    </main>
  );
}

export default App;
