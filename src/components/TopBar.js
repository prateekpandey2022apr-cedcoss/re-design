import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../ShopContext";

function TopBar() {
  const { loggedIn } = useContext(ShopContext);

  return (
    <div className="topbar-container">
      <div className="wrapper">
        <div className="row topbar">
          <div className="left-info">
            <p>
              <a href="">Download WAY2DOOR APP. Click Here.</a>
            </p>
          </div>
          <div className="right-info">
            {loggedIn ? (
              <>
                <a href="/" className="signup">
                  Logout
                </a>
              </>
            ) : (
              <>
                <a href="" className="login">
                  Login
                </a>
                <a href="" className="signup">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
