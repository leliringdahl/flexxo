import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({title, products}) => {



  return (
    <section className="grid-products">
      <h2>{title}</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-3"> 
        {
          products.map(product => <ProductCard key={product.id} product={product}/>)
        }
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
