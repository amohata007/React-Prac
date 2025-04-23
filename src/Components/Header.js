import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/Constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="header-logo">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
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
