import React, { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    
    

  return (
    <nav className="z-40 bg-banner-bg bg-opacity-90 p-3 w-full top-0 fixed overflow-hidden">
        <div className="flex justify-between items-center mx-auto w-5/6">
            <h4 className={`text-foreground font-playfair font-extrabold text-2xl rounded-sm py-1 px-2`}>Chess Genius</h4>

            {isAboveSmallScreens ? (
                <div className="flex justify-between items-center gap-12 font-opensans text-lg font-bold text-black">
                    <NavLink className="hover:text-red transition duration-500 cursor-pointer" to="/" >HOME</NavLink>
                    <button className="font-bold px-3 rounded-md bg-blue text-white border-2 border-white hover:bg-red hover:border-foreground transition duration-500" onClick={() => window.location.reload()} >RESET</button>
                </div>
            ) : (
                <button className="rounded-full bg-foreground border-2 border-slate-200" onClick={() => setIsMenuToggled(!isMenuToggled)} >
                        <img src={require('../assets/menu-42.png')} alt="menu" />
                </button>
            )}

            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 top-[9%] bg-banner-bg w-full h-1/2 p-4">

                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 m-auto text-2xl font-bold text-foreground rounded-b-lg p-1">
                    <NavLink to="/">HOME</NavLink>
                    <button className="font-bold px-3 rounded-md bg-blue text-white border-2 border-white hover:bg-red hover:border-foreground transition duration-500" onClick={() => window.location.reload()} >RESET</button>
                </div>
            </div>
            )}
        </div>
    </nav>
  )
}
