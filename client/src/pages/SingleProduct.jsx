import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mainmenu from '../components/MainMenu'

import ShopDetail from '../components/ShopDetail'
import SingleProductDetail from '../components/SingleProductDetail'
import Subscription from '../components/Subscription'

const SingleProduct = () => {
  return (
      <>
        <Header />
        <Mainmenu />
        
          <SingleProductDetail/>
          
        <Subscription/>
        <Footer />
      </>
  )
}



export default SingleProduct
