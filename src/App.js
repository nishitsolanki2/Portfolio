import Navbar from "./components/navbar/navbar.js";
import Intro from "./components/Intro/Intro.js";
import Skills from "./components/Skills/Skills.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
