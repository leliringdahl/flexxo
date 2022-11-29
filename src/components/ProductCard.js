import React from 'react'
import { NavLink } from 'react-router-dom'
import MainButton from './MainButton'


const ProductCard = ({item}) => { /*hette product innan men jag bytte till item, blev för rörigt.*/

    const addToWishList = () => {
        console.log("added to wish list")
    }
    const addToCompare = () => {
        console.log("added to compare")
    }
    const addToShoppingCart = () => {
        console.log("added to Cart")
    }
 /**/
  return (
    <div className="col">
        <div className="card">
            <img src={item.imageName} alt={item.name}/>
            <ul className="card-menu">
                {/* console klagade på att det saknades key på objekten i listan.*/}
                <li key="wishList"><button  className="btn btn-round" onClick={addToWishList} ><i className="fa-regular fa-heart"></i></button></li>
                <li key="compare"><button  className="btn btn-round" onClick={addToCompare} ><i className="fa-regular fa-code-compare" ></i></button></li>
                <li key="cart"><button  className="btn btn-round" onClick={addToShoppingCart} ><i className="fa-regular fa-bag-shopping" ></i></button></li>
            </ul>
            <div className="card-button">
                <MainButton link={`/products/${item.articleNumber.toLowerCase().replace(/ /gi, "-")}`} text="QUICK VIEW"/>
            </div> 
            <div className="card-background"></div>
        </div>
        <div className="card-body">
            <p className="card-category">{item.category}</p>
            <NavLink className="product-link" to={`/products/${item.articleNumber.toLowerCase().replace(/ /gi, "-")}`}><h3>{item.name}</h3></NavLink>
            <span className='card-rating'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </span>
            <p className="card-price">${item.price}</p>
        </div>   
    </div>
  )
}

export default ProductCard