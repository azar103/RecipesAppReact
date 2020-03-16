/* eslint-disable react/react-in-jsx-scope */
import  './NavBar.css'
import React from 'react'
const NavBar = () => {
      return(
          // eslint-disable-next-line react/react-in-jsx-scope
          <div className="navbar_container">
                <div>
                      <ul>
                         <a href="#" className="link"><li className="item">Recettes</li></a>
                         <a href="#" className="link"><li className="item">Categories</li></a>
                         <a href="#" className="link"><li className="item last-item">Recette au hasard</li></a>
                      </ul>
                </div>
                <div className="btn-container">
                
                <input type="button" value="CONNEXION" id="btn" />
                
                     
                </div>
          </div>
      )
}


export default NavBar