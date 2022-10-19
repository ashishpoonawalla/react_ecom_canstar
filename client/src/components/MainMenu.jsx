import React from 'react'
import {   Link } from "react-router-dom";

const Mainmenu = () => {
  return (
    <>
 
      <section className="menu">
        <nav className="navbar navigation">
          <div className="container">
            <div className="navbar-header">
              <h2 className="menu-title">Main Menu</h2>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
          
            <div id="navbar" className="navbar-collapse collapse text-center">
              <ul className="nav navbar-nav">
              
                <li className="dropdown ">
                  <Link to="/">Home</Link>
                </li>
              
                <li className="dropdown">
                  <Link to="/Shop">Shop</Link>
                </li>

                {/* <li className="dropdown">
                  <Link to="/SingleProduct">SingleProduct</Link>
                </li> */}


                <li className="dropdown">
                  <Link to="/Cart">Cart</Link>
                </li>

                <li className="dropdown">
                  <Link to="/Checkout">Checkout</Link>
                </li>

                
                
                
              </ul>
          
            </div>
          
          </div>
        
        </nav>
      </section>
    </>

  )
}

export default Mainmenu
