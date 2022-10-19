import React from 'react'

const ProductaList = ({title, img, price, id}) => {
  return (
    <div className="col-md-4">
        <div className="product-item">
            <div className="product-thumb">
                <span className="bage">Sale</span>
                <img
                className="img-responsive"
                src={img}
                alt="product-img"
                />
                <div className="preview-meta">
                <ul>
                    <li>
                    <a href={`/SingleProduct?id=${id}`}>
                        <i className="tf-ion-ios-search-strong" />
                    </a>
                    </li>
                    <li>
                    <a href="#!">
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
                <a href="product-single.html">{title}</a>
                </h4>
                <p className="price">${price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductaList