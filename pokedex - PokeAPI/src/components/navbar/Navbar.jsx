import React from "react";
import './style.css'

const Navbar = () => {
    const logoImg = "https://cdn.discordapp.com/attachments/601964764977168391/1003504106893221928/Pokedex_logo.png"
    return (
        <div>
            <nav>
                <div>
                   <img 
                   src={logoImg} 
                   alt="pokedex_logo"
                   className="navbar-img"
                   />
                </div>
            </nav>

        </div>

    );
}

export default Navbar
