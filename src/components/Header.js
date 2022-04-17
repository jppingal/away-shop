import React from "react"
import logo from "../images/away-logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import "./header.css";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="logo-container">
                        <img src={logo} className="logo-img" />
                    </div>
                    <div className="search-container" >
                        
                        <SearchIcon className="search-icon" />
                        <input
                        
                            className="search-bar"
                            type="search"
                            placeholder="search products"
                            alt="logo"
                        />
                    </div>
                    <div className="user-container">
                        <span className="cart"><ShoppingCartIcon/></span>
                        <span className="user"><MotionPhotosAutoIcon/></span>
                    </div>
                </div>


            </header>
        </>
    )
}
export default Header;