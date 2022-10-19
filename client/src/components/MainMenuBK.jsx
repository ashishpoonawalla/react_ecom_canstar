import React from 'react'
import {   Link } from "react-router-dom";

const MainMenuBK = () => {
  return (
    <>
  {/* Main Menu Section */}
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
        {/* / .navbar-header */}
        {/* Navbar Links */}
        <div id="navbar" className="navbar-collapse collapse text-center">
          <ul className="nav navbar-nav">
            {/* Home */}
            <li className="dropdown ">
                  {/* <a href="index.html">Home</a> */}
                  <Link to="/">Home</Link>
            </li>
            {/* / Home */}
            {/* Elements */}
            <li className="dropdown dropdown-slide">
              <a
                href="#!"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay={350}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop <span className="tf-ion-ios-arrow-down" />
              </a>
              <div className="dropdown-menu">
                <div className="row">
                  {/* Basic */}
                  <div className="col-lg-6 col-md-6 mb-sm-3">
                    <ul>
                      <li className="dropdown-header">Pages</li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="confirmation.html">Confirmation</a>
                      </li>
                    </ul>
                  </div>
                  {/* Layout */}
                  <div className="col-lg-6 col-md-6 mb-sm-3">
                    <ul>
                      <li className="dropdown-header">Layout</li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="product-single.html">Product Details</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">Shop With Sidebar</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* / .row */}
              </div>
              {/* / .dropdown-menu */}
            </li>
            {/* / Elements */}
            {/* Pages */}
            <li className="dropdown full-width dropdown-slide">
              <a
                href="#!"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay={350}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages <span className="tf-ion-ios-arrow-down" />
              </a>
              <div className="dropdown-menu">
                <div className="row">
                  {/* Introduction */}
                  <div className="col-sm-3 col-xs-12">
                    <ul>
                      <li className="dropdown-header">Introduction</li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  {/* Contact */}
                  <div className="col-sm-3 col-xs-12">
                    <ul>
                      <li className="dropdown-header">Dashboard</li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="dashboard.html">User Interface</a>
                      </li>
                      <li>
                        <a href="order.html">Orders</a>
                      </li>
                      <li>
                        <a href="address.html">Address</a>
                      </li>
                      <li>
                        <a href="profile-details.html">Profile Details</a>
                      </li>
                    </ul>
                  </div>
                  {/* Utility */}
                  <div className="col-sm-3 col-xs-12">
                    <ul>
                      <li className="dropdown-header">Utility</li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="login.html">Login Page</a>
                      </li>
                      <li>
                        <a href="signin.html">Signin Page</a>
                      </li>
                      <li>
                        <a href="forget-password.html">Forget Password</a>
                      </li>
                    </ul>
                  </div>
                  {/* Mega Menu */}
                  <div className="col-sm-3 col-xs-12">
                    <a href="shop.html">
                      <img
                        className="img-responsive"
                        src="images/shop/header-img.jpg"
                        alt="menu image"
                      />
                    </a>
                  </div>
                </div>
                {/* / .row */}
              </div>
              {/* / .dropdown-menu */}
            </li>
            {/* / Pages */}
            {/* Blog */}
            <li className="dropdown dropdown-slide">
              <a
                href="#!"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay={350}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog <span className="tf-ion-ios-arrow-down" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                </li>
                <li>
                  <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="blog-full-width.html">Blog Full Width</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog 2 Columns</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            {/* / Blog */}
            {/* Shop */}
            <li className="dropdown dropdown-slide">
              <a
                href="#!"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay={350}
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Elements <span className="tf-ion-ios-arrow-down" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
              </ul>
            </li>
            {/* / Blog */}
          </ul>
          {/* / .nav .navbar-nav */}
        </div>
        {/*/.navbar-collapse */}
      </div>
      {/* / .container */}
    </nav>
  </section>
</>

  )
}

export default MainMenuBK
