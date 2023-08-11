import "./App.css";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import About from "./about/About";
import Meals from "./menu/Meals";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Home />
      <Meals />
      <About />
    </div>
  );
}

export default App;
