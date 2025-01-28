import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import momoLogo from "../../assets/images/momoLogo.png";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUserCircle } from "react-icons/fa";

function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();

  const { state } = useContext(CartContext);
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <div className=" flex justify-around flex-wrap items-center mt-3 ">
      <div className="  flex items-center px-5 gap-x-3">
        <img src={momoLogo} alt="momoLogo" className="h-5" />
        <NavLink to="/" className="text-green-600  font-sans font-bold ">
          Momo
        </NavLink>
      </div>
      <div className=" flex text-slate-500  px-5 gap-x-5   ">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">Allergy Advice</NavLink>

        {isAuthenticated ? (
          <NavLink
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </NavLink>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">SignUP</NavLink>
          </div>
        )}

        <NavLink className=" relative  flex  " to="/cartPage">
          <span>
            <FaCartPlus size={20} />
          </span>
          <span className=" absolute bottom-3 left-5 "> {totalItems}</span>
        </NavLink>
      </div>

      <div className=" flex  px-5 gap-x-5   items-center">
        <NavLink to="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
        </NavLink>

        <NavLink to="https://www.tiktok.com/" target="_blank">
          <FaTiktok />
        </NavLink>

        <NavLink to="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-orange-700 rounded-3xl text-white px-4 py-2"
        >
          Contact US
        </NavLink>

        {isAuthenticated ? (
          <NavLink to="/profile" className=" rounded-full ">
            <img className="rounded-full h-10 " src={user.picture} alt="" />
          </NavLink>
        ) : (
          <div>
            <FaRegUserCircle size={25} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
