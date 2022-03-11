import React, {useState} from "react"
import "../styles/main-components.css"
import classnames from 'classnames'
import {X,House} from "react-bootstrap-icons"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
function SideNav({isMenuActive,onClose}) {
    const sideMenuClasses = classnames('side-menu', {
        'side-menu--active': isMenuActive,
      })
      const sideMenuContentClasses = classnames('side-menu__content', {
        'side-menu__content--active': isMenuActive,
      })
  
    return (
        <aside className={sideMenuClasses}>
        <div className="side-menu__overlay" />
        <div className={sideMenuContentClasses}>
          <button onClick={onClose} id="close-button">
              <X color="black" size={35}/>
          </button>
          
          <div className="side-nav-item">
          <House size={20} id="nav-icon"/>
            <p>Home</p>
          </div>
        </div>
      </aside>
    )
}

export default SideNav;