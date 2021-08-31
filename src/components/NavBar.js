import React from 'react'
import './NavBar.css'

function NavBar () {
    return (
        <div className="navbar">
            <nav>
              <div className="logo-container">  
                <img src="/hungerlogo.svg" alt="hunger" className="hunger"/> 
             <h4>Zerohunger</h4>
             </div>
            </nav>
                <ul className="info">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>

              <input type="text" className="form-input" placeholder="search"/>
              <div className="together">
              <img src="https://res.cloudinary.com/kayode/image/upload/v1591273406/shopping-cart_xztvok.svg" alt="cart" className="cart-pic" />
              <h4 className="number">0</h4>
              </div>

            <div className="information">
             <button type="button" className="login"> Login</button> 
                <button type="button" className="signup">Sign Up</button>
            </div>
              
            </div>
        
    )
}

export default NavBar;