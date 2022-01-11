import React, {useState} from "react"
import { List } from "react-bootstrap-icons"
import "../styles/main-components.css"
import SideNav from "./SideNav"
import {Search,CartFill} from "react-bootstrap-icons"

 function ComplexNav() {
    const [sideBar, setSideBar] = useState(false)
    const [mode,setMode] = useState(0)
    const openSideBar = () => {
        if(sideBar) {
            setSideBar(false)
        }
        else{
            setSideBar(true)
        }
    }
    return (
        <div className="full-nav">
            <SideNav isMenuActive={sideBar} onClose={() => setSideBar(false)}/>
            <div className="complex-nav">
                
                <div className="choices">
                    <button id="side-nav-open" onClick={openSideBar}>
                        <List size={30} color="black"/>
                    </button>
                    <button className={mode === 0 ? "choice" : "not-choice"} onClick={() => setMode(0)}>Delivery</button>
                    <button className={mode === 1 ? "choice" : "not-choice"} onClick={() => setMode(1)}>Pickup</button>
                    <div>
                        <form className="time-place-choice">      
                        </form>
                    </div>
                </div>
                
                <h1><img src="/logo192.png"/> DOORDASH</h1>
                <div className="search-cart">
                    <form className="nav-search">
                        <Search/>
                        <input placeholder="Search"/>
                    </form>
                    <span id="cart"><CartFill color="white"/> 0</span>
                </div>
                
            </div>
            
        </div>
        
    )
 }

 export default ComplexNav;