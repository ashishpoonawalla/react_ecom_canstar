import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mainmenu from '../components/MainMenu'

import ShopDetail from '../components/ShopDetail'
import Subscription from '../components/Subscription'

const Shop = () => {
  return (
      <>
        <Header />
        <Mainmenu />
        
          <ShopDetail />
          
        <Subscription/>
        <Footer />
      </>
  )
}

export default Shop