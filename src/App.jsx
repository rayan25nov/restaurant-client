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
import AllMeals from "./routes/meals/AllMeals";
import Order from "./routes/orders/Orders";
import Navbar from "./navbar/Navbar";
import Homepage from "./home-page/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/allmeals/:category" element={<AllMeals />} />
            <Route path="/allmeals" element={<AllMeals />} />
            <Route path="orders" element={<Order />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
