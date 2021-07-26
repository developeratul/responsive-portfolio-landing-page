import "./styles/style.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Top from "./components/Top";

const App = () => {
  return (
    <div>
      <Top />
      <Nav />
      <Header />
      <About />
      <Services />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
