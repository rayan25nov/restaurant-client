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
import Offers from "./routes/offers/Offers";
import AllMeals from "./routes/meals/AllMeals";
import Order from "./routes/orders/Orders";
import Navbar from "./navbar/Navbar";
import Homepage from "./home-page/Homepage";
import Cart from "./routes/cart/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/allmeals/:category" element={<AllMeals />} />
            <Route path="/allmeals" element={<AllMeals />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
