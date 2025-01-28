import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
// import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import About from "./Components/Pages/About";
import Menu from "./Components/Pages/Menu";
import AllergyAdvice from "./Components/Pages/AllergyAdvice";
import Services from "./Components/Pages/Services";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/NavBar/Navigation";

import ProductDescription from "./Components/Pages/ProductDescription";
import CartPage from "./Components/Pages/CartPage";
import Payment from "./Components/Pages/Payment";
import Failure from "./Components/Pages/Failure";
import Success from "./Components/Pages/Success";
import Profile from "./Components/Profile";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/productDescription/:product_id" element={<ProductDescription />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/about" element={<About />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
