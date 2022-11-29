import React from 'react'
import { NavLink } from 'react-router-dom'
import RoundButton from './RoundButton'
import MainButton from './MainButton'


const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log("added to wish list")
    }
    const addToCompare = (e) => {
        console.log("added to compare")
    }
    const addToShoppingCart = (e) => {
        console.log("added to Cart")
    }

  return (
    <div className="col">
        <div className="card">
            <img src={product.imgUrl} alt={product.name}/>
            <ul className="card-menu">
                <li><button className="btn btn-round" onClick={addToWishList} ><i className="fa-regular fa-heart"></i></button></li>
                <li><button className="btn btn-round" onClick={addToCompare} ><i className="fa-regular fa-code-compare" ></i></button></li>
                <li><button className="btn btn-round" onClick={addToShoppingCart} ><i className="fa-regular fa-bag-shopping" ></i></button></li>
            </ul>
            <div className="card-button">
                <MainButton link={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} text="QUICK VIEW"/>
            </div> 
            <div className="card-background"></div>
        </div>
        <div className="card-body">
            <p className="card-category">{product.category}</p>
            <NavLink className="product-link" to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`}><h3>{product.name}</h3></NavLink>
            <span className='card-rating'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </span>
            <p className="card-price">{product.price}</p>
        </div>   
    </div>
  )
}

export default ProductCard