import React, {useState} from 'react'
import Navbar from '../sections/Navbar'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'  /* */
import Banners from '../sections/Banners'
import HomePageSale from '../sections/HomePageSale'
import InfoLinks from '../sections/InfoLinks'
import Footer from '../sections/Footer'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Tops", price: "$35.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg"},
    { id: 2, name: "Blue Jeans", category: "Denim", price: "$40.00", ratng: 3, imgUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Black Jacket", category: "Outerwear", price: "$55.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 1, name: "Modern Black Blouse", category: "Tops", price: "$35.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Blue Jeans", category: "Denim", price: "$40.00", ratng: 3, imgUrl: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg"},
    { id: 3, name: "Black Jacket", category: "Outerwear", price: "$55.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Tops", price: "$35.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Blue Jeans", category: "Denim", price: "$40.00", ratng: 3, imgUrl: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg"},
    { id: 3, name: "Black Jacket", category: "Outerwear", price: "$55.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGrid title="Featured Products" products={featuredProducts} />
      <Banners />
      <HomePageSale products={topProducts} />
      <InfoLinks />
      <Footer />
    </>
  )
}

export default HomeView