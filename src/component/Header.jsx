import { useState } from "react"
import logo from "../assets/images/logo.svg"
import menubar from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'
export function Header(){
    const [isopen,setIsopen]=useState(false)

    function openMenu(){
        if(!isopen){
            setIsopen(true)
        }
    }
    function closeMenu(){
        if(isopen){
            setIsopen(false)
        }
    }
    return(
        <header role="header" className="w-full flex justify-between px-4 py-5 items-center">
            <div role="image">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="hidden md:flex font-inter gap-5">
                <li className="text-Darkgrayishblue hover:text-Softred cursor-pointer">Home</li>
                <li className="text-Darkgrayishblue hover:text-Softred cursor-pointer">New</li>
                <li className="text-Darkgrayishblue hover:text-Softred cursor-pointer">Popular</li>
                <li className="text-Darkgrayishblue hover:text-Softred cursor-pointer">Trending</li>
                <li className="text-Darkgrayishblue hover:text-Softred cursor-pointer">Categories</li>
            </ul>
            <div role="wrapper" className={`fixed top-0 right-0 bg-black/25 w-full h-full ${!isopen && 'hidden'}`}>
                <div role="menu-item" className="fixed top-0 right-0 bg-Offwhite h-full w-[70%]">

                    <img src={close} alt="close-menu-icon" width={30} className="absolute top-10 right-10" onClick={closeMenu}/>

                    <ul className="relative top-40 grid gap-6 px-6 font-inter">
                        <li className="text-xl">Home</li>
                        <li className="text-xl">New</li>
                        <li className="text-xl">Popular</li>
                        <li className="text-xl">Trending</li>
                        <li className="text-xl">Categories</li>
                    </ul>
                    
                </div>
            </div>
            <button role="menu" className="md:hidden">
                <img src={menubar} alt="menu-icon" onClick={openMenu}/>
            </button>
        </header>
    )
}