import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Routes
import AboutUs from "./routes/about-us/AboutUs";
import Offers from "./routes/offers/Offers";
import AllComponent from "./AllComponent";
import AllMeals from "./routes/meals/AllMeals";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AllComponent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/allmeals/:category" element={<AllMeals />} />
          <Route path="/allmeals" element={<AllMeals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
