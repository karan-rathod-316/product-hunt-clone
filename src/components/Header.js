import React from 'react';

function Header(){
    return( 
          <header>
              <div className="header-container">
                <div className="logo"><img src="../../images/product-hunt-logo.png" alt=""/></div>

                <div className="search-bar">
                  <input className="search" type="text" placeholder="Discover your favorite things..."/>
                </div>

                <nav className="nav-bar">
                    <a href="##">Deals</a>
                    <a href="##">Jobs</a>
                    <a href="##">Discussions</a>
                    <a href="##">Ship</a>
                    <a href="##">Mentor</a>
                    <a href="##">...</a>
                </nav>

                <div className="header-buttons">
                  <button className="login-button">LOG IN</button>
                  <button className="signup-button">SIGN UP</button>
                </div>
              </div>
          

          </header>

        )
}



export default Header