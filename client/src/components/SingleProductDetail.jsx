import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const SingleProductDetail = () =>
{
    
    var query = window.location.search.substring(1);
    var vars = query.split("=")
    console.log(vars[1])

    const [data, setData] = useState([])

    const [color, setColor] = useState([])
    const [color1, setColor1] = useState('')

    const [size, setSize] = useState([])
    const [size1, setSize1] = useState('')
    
    const [cat1, setCat1] = useState([])
    const [cat11, setCat11] = useState('')

    const [quantity, setQuantity] = useState(1)
    

    useEffect(() =>
    {
        const getData = async () =>
        {           
       
            await Axios.get("http://localhost:5000/api/products/findOne/" + vars[1]).then((res) =>
            {
                setData(res.data)
                setColor(res.data.color)
                setSize(res.data.size)
                setCat1(res.data.categories)
                console.log(res.data)
            })
        }
        getData()
    }, [])

    const dispatch = useDispatch()

    const handleClick = () =>     { 
        
        dispatch(addProduct({ products: data, quantity , price: data.price*quantity}))
        
        //const newItem = { id: data._id, title: data.title, img: data.img, qty: 1 }
        //var cartItem = JSON.parse(localStorage.getItem("cartItem")); //get them back        
        //const cartItem1 = { ...cartItem, ...newItem }
        //localStorage.setItem("cartItem", JSON.stringify(cartItem1));
        //console.log(cartItem1)
        //localStorage.clear();
        
    };
    
  return (
    
    <>
        <section className="single-product">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <ol className="breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="shop.html">Shop</a>
                    </li>
                    <li className="active">{data.title}</li>
                    </ol>
                </div>
             
                </div>
                <div className="row mt-20">
                <div className="col-md-5">
                    <div className="single-product-slider">
                    <div
                        id="carousel-custom"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-outer">
                        {/* me art lab slider */}
                            <div className="carousel-inner ">
                                <div className="item active">
                                <img
                                    src={data.img}
                                    alt=""
                                    data-zoom-image="images/shop/single-products/product-1.jpg"
                                />
                                </div>
                            
                                
                            </div>
                        
                       
                        </div>
                        {/* thumb */}
                    
                    </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="single-product-details">
                    <h2>{data.title}</h2>
                    <p className="product-price">${data.price}</p>
                    <p className="product-description mt-20">
                        {data.desc}.
                    </p>
                   
                    <div className="color-swatches">
                        <span>color:</span>
                            <ul>
                               
                            {color.map((col) => (
                                <li >
                                    <a href="#!" className="swatch-violet" style={{backgroundColor: col, border: "1px solid lightgrey"}}/>
                                </li>
                            ))} 
                           
                        
                        </ul>
                    </div>
                    <div className="product-size">
                        <span>Size:</span>
                        <select className="form-control">
                                      {size.map((siz) => (                                          
                                          <option>{siz}</option>
                                      ))}
                        {/* <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option> */}
                        </select>
                    </div>
                    <div className="product-quantity">
                        <span>Quantity:</span>
                        <div className="product-quantity-slider">
                        <input
                            id="product-quantity"
                            type="number"
                            defaultValue={1}
                            min={1}
                                          name="product-quantity"
                                          onChange={(e)=>setQuantity(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className="product-category">
                        <span>Categories:</span>
                        <ul>
                            {cat1.map((ci) =>
                            {
                                    <li>
                                        <a href="#">11</a>
                                    </li>
                            })}
                           
                            
                        </ul>
                    </div>
                    <a onClick={()=>handleClick()} className="btn btn-main mt-20">
                        Add To Cart
                    </a>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xs-12">
                    <div className="tabCommon mt-20">
                    <ul className="nav nav-tabs">
                        <li className="active">
                        <a data-toggle="tab" href="#details" aria-expanded="true">
                            Details
                        </a>
                        </li>
                        <li className="">
                        <a data-toggle="tab" href="#reviews" aria-expanded="false">
                            Reviews (3)
                        </a>
                        </li>
                    </ul>
                    <div className="tab-content patternbg">
                        <div id="details" className="tab-pane fade active in">
                        <h4>Product Description</h4>
                        <p>
                        {data.desc}
                        </p>
                        
                        </div>
                        <div id="reviews" className="tab-pane fade">
                        <div className="post-comments">
                            <ul className="media-list comments-list m-bot-50 clearlist">
                            {/* Comment Item start*/}
                            <li className="media">
                                <a className="pull-left" href="#!">
                                <img
                                    className="media-object comment-avatar"
                                    src="images/blog/avater-1.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                                </a>
                                <div className="media-body">
                                <div className="comment-info">
                                    <h4 className="comment-author">
                                    <a href="#!">Jonathon Andrew</a>
                                    </h4>
                                    <time dateTime="2013-04-06T13:53">
                                    July 02, 2015, at 11:34
                                    </time>
                                    <a className="comment-button" href="#!">
                                    <i className="tf-ion-chatbubbles" />
                                    Reply
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Quisque at magna ut ante eleifend eleifend.Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit.
                                    Quod laborum minima, reprehenderit laboriosam officiis
                                    praesentium? Impedit minus provident assumenda quae.
                                </p>
                                </div>
                            </li>
                            {/* End Comment Item */}
                            {/* Comment Item start*/}
                            <li className="media">
                                <a className="pull-left" href="#!">
                                <img
                                    className="media-object comment-avatar"
                                    src="images/blog/avater-4.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                                </a>
                                <div className="media-body">
                                <div className="comment-info">
                                    <div className="comment-author">
                                    <a href="#!">Jonathon Andrew</a>
                                    </div>
                                    <time dateTime="2013-04-06T13:53">
                                    July 02, 2015, at 11:34
                                    </time>
                                    <a className="comment-button" href="#!">
                                    <i className="tf-ion-chatbubbles" />
                                    Reply
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Quisque at magna ut ante eleifend eleifend.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Magni natus, nostrum iste non delectus atque ab
                                    a accusantium optio, dolor!
                                </p>
                                </div>
                            </li>
                            {/* End Comment Item */}
                            {/* Comment Item start*/}
                            <li className="media">
                                <a className="pull-left" href="#!">
                                <img
                                    className="media-object comment-avatar"
                                    src="images/blog/avater-1.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                                </a>
                                <div className="media-body">
                                <div className="comment-info">
                                    <div className="comment-author">
                                    <a href="#!">Jonathon Andrew</a>
                                    </div>
                                    <time dateTime="2013-04-06T13:53">
                                    July 02, 2015, at 11:34
                                    </time>
                                    <a className="comment-button" href="#!">
                                    <i className="tf-ion-chatbubbles" />
                                    Reply
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Quisque at magna ut ante eleifend eleifend.
                                </p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="products related-products section">
            <div className="container">
                <div className="row">
                <div className="title text-center">
                    <h2>Related Products</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-3">
                    <div className="product-item">
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
                        <img
                        className="img-responsive"
                        src="images/shop/products/product-5.jpg"
                        alt="product-img"
                        />
                        <div className="preview-meta">
                        <ul>
                            <li>
                            <span data-toggle="modal" data-target="#product-modal">
                                <i className="tf-ion-ios-search" />
                            </span>
                            </li>
                            <li>
                            <a href="#">
                                <i className="tf-ion-ios-heart" />
                            </a>
                            </li>
                            <li>
                            <a href="#!">
                                <i className="tf-ion-android-cart" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4>
                        <a href="product-single.html">Reef Boardsport</a>
                        </h4>
                        <p className="price">$200</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-item">
                    <div className="product-thumb">
                        <img
                        className="img-responsive"
                        src="images/shop/products/product-1.jpg"
                        alt="product-img"
                        />
                        <div className="preview-meta">
                        <ul>
                            <li>
                            <span data-toggle="modal" data-target="#product-modal">
                                <i className="tf-ion-ios-search-strong" />
                            </span>
                            </li>
                            <li>
                            <a href="#">
                                <i className="tf-ion-ios-heart" />
                            </a>
                            </li>
                            <li>
                            <a href="#!">
                                <i className="tf-ion-android-cart" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4>
                        <a href="product-single.html">Rainbow Shoes</a>
                        </h4>
                        <p className="price">$200</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-item">
                    <div className="product-thumb">
                        <img
                        className="img-responsive"
                        src="images/shop/products/product-2.jpg"
                        alt="product-img"
                        />
                        <div className="preview-meta">
                        <ul>
                            <li>
                            <span data-toggle="modal" data-target="#product-modal">
                                <i className="tf-ion-ios-search" />
                            </span>
                            </li>
                            <li>
                            <a href="#">
                                <i className="tf-ion-ios-heart" />
                            </a>
                            </li>
                            <li>
                            <a href="#!">
                                <i className="tf-ion-android-cart" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4>
                        <a href="product-single.html">Strayhorn SP</a>
                        </h4>
                        <p className="price">$230</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-item">
                    <div className="product-thumb">
                        <img
                        className="img-responsive"
                        src="images/shop/products/product-3.jpg"
                        alt="product-img"
                        />
                        <div className="preview-meta">
                        <ul>
                            <li>
                            <span data-toggle="modal" data-target="#product-modal">
                                <i className="tf-ion-ios-search" />
                            </span>
                            </li>
                            <li>
                            <a href="#">
                                <i className="tf-ion-ios-heart" />
                            </a>
                            </li>
                            <li>
                            <a href="#!">
                                <i className="tf-ion-android-cart" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <h4>
                        <a href="product-single.html">Bradley Mid</a>
                        </h4>
                        <p className="price">$200</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Modal */}
            <div className="modal product-modal fade" id="product-modal">
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
                    <div className="col-md-8">
                        <div className="modal-image">
                        <img
                            className="img-responsive"
                            src="images/shop/products/modal-product.jpg"
                        />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="product-short-details">
                        <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                        <p className="product-price">$200</p>
                        <p className="product-short-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                            iusto nihil cum. Illo laborum numquam rem aut officia dicta
                            cumque.
                        </p>
                        <a href="#!" className="btn btn-main">
                            Add To Cart
                        </a>
                        <a href="#!" className="btn btn-transparent">
                            View Product Details
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  
  )
}

export default SingleProductDetail