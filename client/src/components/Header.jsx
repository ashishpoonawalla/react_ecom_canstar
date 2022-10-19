import React from 'react'
import { useSelector } from 'react-redux'

const Header = () =>
{
  const quantity = useSelector(state => state.cart.quantity)
  console.log(quantity)

  return (
    <>
    
    {/* Start Top Header Bar */}
    <section className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12 col-sm-4">
            <div className="contact-number">
              <i className="tf-ion-ios-telephone" />
              <span>0129- 12323-123123</span>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            {/* Site Logo */}
            <div className="logo text-center">
              <a href="index.html">
                {/* replace logo here */}
                <svg
                  width="135px"
                  height="29px"
                  viewBox="0 0 155 29"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                    fontSize={40}
                    fontFamily="AustinBold, Austin"
                    fontWeight="bold"
                  >
                    <g
                      id="Group"
                      transform="translate(-108.000000, -297.000000)"
                      fill="#000000"
                    >
                      <text id="AVIATO">
                        <tspan x="108.94" y={325}>
                          SKYO.
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 col-sm-4">
            {/* Cart */}
            <ul className="top-menu text-right list-inline">
              <li className="dropdown cart-nav dropdown-slide">
                <a
                  href="#!"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  <i className="tf-ion-android-cart" />
                  Cart {quantity}
                </a>
                <div className="dropdown-menu cart-dropdown">
                  {/* Cart Item */}
                  <div className="media">
                    <a className="pull-left" href="#!">
                      <img
                        className="media-object"
                        src="images/shop/cart/cart-1.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="#!">Ladies Bag</a>
                      </h4>
                      <div className="cart-price">
                        <span>1 x</span>
                        <span>1250.00</span>
                      </div>
                      <h5>
                        <strong>$1200</strong>
                      </h5>
                    </div>
                    <a href="#!" className="remove">
                      <i className="tf-ion-close" />
                    </a>
                  </div>
                  {/* / Cart Item */}
                  {/* Cart Item */}
                  <div className="media">
                    <a className="pull-left" href="#!">
                      <img
                        className="media-object"
                        src="images/shop/cart/cart-2.jpg"
                        alt="image"
                      />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="#!">Ladies Bag</a>
                      </h4>
                      <div className="cart-price">
                        <span>1 x</span>
                        <span>1250.00</span>
                      </div>
                      <h5>
                        <strong>$1200</strong>
                      </h5>
                    </div>
                    <a href="#!" className="remove">
                      <i className="tf-ion-close" />
                    </a>
                  </div>
                  {/* / Cart Item */}
                  <div className="cart-summary">
                    <span>Total</span>
                    <span className="total-price">$1799.00</span>
                  </div>
                  <ul className="text-center cart-buttons">
                    <li>
                      <a href="cart.html" className="btn btn-small">
                        View Cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="checkout.html"
                        className="btn btn-small btn-solid-border"
                      >
                        Checkout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* / Cart */}
              {/* Search */}
              <li className="dropdown search dropdown-slide">
                <a
                  href="#!"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                >
                  <i className="tf-ion-ios-search-strong" /> Search
                </a>
                <ul className="dropdown-menu search-dropdown">
                  <li>
                    <form action="post">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search..."
                      />
                    </form>
                  </li>
                </ul>
              </li>
              {/* / Search */}
              {/* Languages */}
              {/* <li className="commonSelect">
                <select className="form-control">
                  <option>EN</option>
                  <option>DE</option>
                  <option>FR</option>
                  <option>ES</option>
                </select>
              </li> */}
              {/* / Languages */}
            </ul>
            {/* / .nav .navbar-nav .navbar-right */}
          </div>
        </div>
      </div>
    </section>
    {/* End Top Header Bar */}
  </>
  

  )
}

export default Header