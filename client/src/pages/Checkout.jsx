import React from 'react'
import CheckoutDetail from '../components/CheckoutDetail'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mainmenu from '../components/MainMenu'

import Subscription from '../components/Subscription'

const Checkout = () => {
  return (
      <>
        <Header />
        <Mainmenu />
        
          <CheckoutDetail />
          
        {/* <Subscription/> */}
        <Footer />
      </>
  )
}

export default Checkout