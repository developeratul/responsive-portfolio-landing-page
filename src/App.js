import "./styles/style.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Services />
    </div>
  );
};

export default App;
