import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200 sm:bg-green-200 lg:bg-yellow-100">
      <div className="header-logo">
        <Link to="/">
          {" "}
          <img className="w-24 m-2 p-2" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="">
        <ul className="flex m-4 p-4">
          <li className="px-4 text-xl">
            {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">Cart</li>
          <button
            className="text-xl px-4"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
