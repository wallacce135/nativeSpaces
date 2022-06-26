import React from "react";
import './Header.scss';
import logo from '../../assets/small_logo.svg';
import pin from '../../assets/map-pin.svg';
import eye from '../../assets/eye.svg';
import flag_ru from '../../assets/RU.svg';
import profile_logo_png from '../../assets/profile_logo.png';
import Search from "./Search/Search";

function Header(){
    return(
        <div className="Header">

            <div className="Header_main">

                <div className="Header_naming">
                    <img src={logo} alt="Родные просторы"/>
                    <h2>Родные просторы</h2>
                </div>

                <Search />

                <button className="Header_nav">
                    <img src={pin} alt="pin"/>
                    Санкт-Петербург
                </button>

                <button className="Header_nav">
                    <img src={eye} alt="eye"/>
                </button>

                <button className="Header_nav">
                    <img src={flag_ru} alt="RU"/>
                </button>

                <button className="Header_nav Header_Burger_btn">
                    <img src={profile_logo_png} alt="profile_logo"/>
                    <div className="Header_Burger_lines">
                        <hr className="Header_Burger_line" />
                        <hr className="Header_Burger_line" />
                        <hr className="Header_Burger_line" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header