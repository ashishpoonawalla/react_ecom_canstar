import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductaList from './ProductaList'
import Axios from 'axios'


const ShopDetail = () =>
{
    const [data, setData] = useState([])

    useEffect(() =>
    {
        const getData = async () =>
        {           
       
            await Axios.get("http://localhost:5000/api/products/find/").then((res) =>
            {
                setData(res.data)
                console.log(res.data)
            })
        }
        getData()
    },[])

  return (
    
    <>
        <section className="page-header">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="content">
                    <h1 className="page-name">Shop</h1>
                    <ol className="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li className="active">shop</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
          </section>
          
        <section className="products section">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div className="widget">
                    <h4 className="widget-title">Short By</h4>
                    <form method="post" action="#">
                    <select className="form-control">
                        <option>Tshirt</option>
                        <option>Top</option>
                        <option>Frok</option>
                        <option>Jeans</option>
                    </select>
                    </form>
                </div>
                <div className="widget product-category">
                    <h4 className="widget-title">Categories</h4>
                    <div
                    className="panel-group commonAccordion"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                    >
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Size
                            </a>
                        </h4>
                        </div>
                        <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        >
                        <div className="panel-body">
                            <ul>
                            <li>
                                <a href="#!">Small</a>
                            </li>
                            <li>
                                <a href="#!">Medium</a>
                            </li>
                            <li>
                                <a href="#!">Large</a>
                            </li>
                            <li>
                                <a href="#!">Xtra Large</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                            <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            >
                            Color
                            </a>
                        </h4>
                        </div>
                        <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        >
                        <div className="panel-body">
                            <ul>
                            <li>
                                <a href="#!">White</a>
                            </li>
                            <li>
                                <a href="#!">Blue</a>
                            </li>
                            <li>
                                <a href="#!">Grey</a>
                            </li>
                            <li>
                                <a href="#!">Yellow</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                            <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            >
                            Brand
                            </a>
                        </h4>
                        </div>
                        <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        >
                        <div className="panel-body">
                            <ul>
                            <li>
                                <a href="#!">Zarra</a>
                            </li>
                            <li>
                                <a href="#!">Lui Phillip</a>
                            </li>
                            <li>
                                <a href="#!">Nike</a>
                            </li>
                            <li>
                                <a href="#!">Addidas</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-9">
                <div className="row">
                    
                    
                    {data.map((item) => (
                        <ProductaList title={item.title} img={item.img} price={item.price}  id={item._id}/>
                    ))}
                
                    {/* Modal */}
                    
                    {/* <div className="modal product-modal fade" id="product-modal">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <i className="tf-ion-close" />
                    </button>
                    <div className="modal-dialog " role="document">
                        <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <div className="modal-image">
                                <img
                                    className="img-responsive"
                                    src="images/shop/products/modal-product.jpg"
                                    alt="product-img"
                                />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="product-short-details">
                                <h2 className="product-title">
                                    GM Pendant, Basalt Grey
                                </h2>
                                <p className="product-price">$200</p>
                                <p className="product-short-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Rem iusto nihil cum. Illo laborum numquam rem
                                    aut officia dicta cumque.
                                </p>
                                <a href="cart.html" className="btn btn-main">
                                    Add To Cart
                                </a>
                                <a
                                    href="product-single.html"
                                    className="btn btn-transparent"
                                >
                                    View Product Details
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    {/* /.modal */}
                </div>
                </div>
            </div>
            </div>
        </section>
        </>

    
      
  )
}

export default ShopDetail