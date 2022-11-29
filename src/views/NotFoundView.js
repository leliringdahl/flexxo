import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const NotFoundView = () => {
  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center align-items-center" style={{height: "500px"}}>
        <h1>404 - Page Not Found</h1>
      </div>
      <div style={{position: "fixed", bottom: "0", width:"100%"}}>
        <Footer/>
      </div>
    </>
  )
}

export default NotFoundView