import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Mainmenu from '../components/MainMenu'

import ShopDetail from '../components/ShopDetail'
import Subscription from '../components/Subscription'

const Privacy = () => {
  return (
      <>
        <Header />
        <Mainmenu />
        
          
        <>
  <section className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="content">
            <h1 className="page-name">Privacy Policy</h1>
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">privacy</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="page-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            repudiandae.
          </p>
          <p>admin@mail.com</p>
        </div>
        <div className="col-md-8">
          <h4>Order Status</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            iusto, alias, tempora fuga quam eveniet neque excepturi aliquid.
            Eligendi, mollitia.
          </p>
          <h4>Shipping &amp; Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            voluptatibus, incidunt similique nobis sint quisquam nam ab error
            consequuntur sit ullam ex eum exercitationem, excepturi explicabo
            beatae eos aspernatur odit ad perspiciatis, neque saepe magni enim.
            Maiores quia, quae sequi.
          </p>
          <h4>Payments</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus repellat id, laboriosam ipsa repudiandae quisquam,
            suscipit officiis, praesentium itaque facilis distinctio dolorum.
            Velit reiciendis libero laudantium corporis, delectus impedit sunt.
          </p>
          <h4>Returns &amp; Exchanges</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            eaque nam, ab voluptas et debitis sint hic vel ratione dignissimos.
          </p>
          <h4>Privacy Policy</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            blanditiis quod saepe, inventore ipsum sint cum iste quae ratione
            nobis laborum minima autem totam similique, quia neque deleniti!
            Provident, suscipit.
          </p>
        </div>
      </div>
    </div>
  </section>
</>



          
        <Subscription/>
        <Footer />
      </>
  )
}

export default Privacy