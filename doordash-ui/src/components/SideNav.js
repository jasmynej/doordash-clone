import React, {useState} from "react"
import "../styles/main-components.css"
import classnames from 'classnames'
import {X} from "react-bootstrap-icons"
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
              <X color="black"/>
          </button>
          
          Side bar
        </div>
      </aside>
    )
}

export default SideNav;