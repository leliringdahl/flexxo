import React, {useEffect, useState } from 'react';
import './App.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import {ProductContext} from './contexts/context';

function App() {  /*något här är galet, den visar bara saleProducts och featuredProducts samtidigt IBLAND. har inte fått någon felkod och har försökt lösa det men har inte lyckats.- */
  const [products, setProducts] = useState({
    productsLibrary: [],
    featuredProducts: [],
    saleProducts: []
  })

  useEffect(() => {
     const fetchProductsLibrary = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, productsLibrary: await result.json()})
    }
    fetchProductsLibrary()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const fetchSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=6')
      setProducts({...products, saleProducts: await result.json()})
    }
    fetchSaleProducts()
    
  }, [setProducts])

 /* const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Tops", price: "$35.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg"},
    { id: 2, name: "Blue Jeans", category: "Denim", price: "$40.00", ratng: 3, imgUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Black Jacket", category: "Outerwear", price: "$55.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 1, name: "Modern Black Blouse", category: "Tops", price: "$35.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Blue Jeans", category: "Denim", price: "$40.00", ratng: 3, imgUrl: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg"},
    { id: 3, name: "Black Jacket", category: "Outerwear", price: "$55.00", ratng: 5, imgUrl: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "white sneakers", category: "Shoes", price: "$50.00", ratng: 4, imgUrl: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ]) */

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
