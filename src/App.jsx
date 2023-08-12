import "./App.css";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import About from "./about/About";
import Meals from "./menu/Meals";
import Review from "./reviews/Review";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Home />
      <Meals />
      <About />
      <Review />
    </div>
  );
}

export default App;
