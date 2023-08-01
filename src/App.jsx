import "./App.css";
import Home from "./common/Home";
import Navbar from "./common/Navbar";
import Meals from "./menu/Meals";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Home />
      <Meals />
    </div>
  );
}

export default App;
