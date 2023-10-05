import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
// Routes
import AboutUs from "./routes/about-us/AboutUs";
import Offers from "./routes/offers/Offers";
import AllComponent from "./AllComponent";
import AllMeals from "./routes/meals/AllMeals";

function App() {
  return (
    <div>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" element={<AllComponent />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/allmeals/:category" element={<AllMeals />} />
            <Route path="/allmeals" element={<AllMeals />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
