import React, {useContext} from 'react'
import Navbar from '../sections/Navbar'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'
import Banners from '../sections/Banners'
import HomePageSale from '../sections/HomePageSale'
import InfoLinks from '../sections/InfoLinks'
import Footer from '../sections/Footer'
import {ProductContext} from '../contexts/context'

const HomeView = () => {
  const productContext = useContext(ProductContext);

  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGrid title="Featured Products" items={productContext.featuredProducts}/>
      <Banners />
      <HomePageSale items={productContext.saleProducts} />
      <InfoLinks />
      <Footer />
    </>
  )
}

export default HomeView