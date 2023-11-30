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
import AboutUsLink from "./routes/extras/AboutUsLink";
import TermsOfUse from "./routes/extras/TermsOfUse";
import Advertise from "./routes/extras/Advertise";
import OurServices from "./routes/extras/OurServices";
import PrivacyPolicy from "./routes/extras/PrivacyPolicy";
import Security from "./routes/extras/Security";
import PaymentOptions from "./routes/extras/PaymentOptions";
import AdsInfo from "./routes/extras/AdsInfo";
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
            <Route path="/aboutus" element={<AboutUsLink />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/ourservices" element={<OurServices />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/paymentoptions" element={<PaymentOptions />} />
            <Route path="/adsinfo" element={<AdsInfo />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
