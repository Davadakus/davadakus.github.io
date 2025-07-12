import React from "react"
import { useState, useEffect } from "react";

function Header() {
    const Menu = ["Illustrations", "Games", "About", "Other Projects"];
    const [open, setOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 500); // show after 100px
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="w-full h-[70px]">
        <div className={`fixed top-0 left-0 max-w-[40px] z-20 m-3 transition-opacity duration-500 ease-in-out
          ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
          <a href="/"> 
            <img src="Artwork/DropDown/home.png" alt="Home" />
          </a>
        </div>
        
        
        <div draggable="false" className="fixed top-0 right-0 m-4 text-[24px] font-semibold z-20">
          <p className="cursor-pointer" onClick={() => setOpen(!open)}>MENU</p>
          
            <div className={`fixed top-0 right-0 mr-5 bg-white shadow-lg rounded-4xl border-2 border-rose-900 overflow-hidden z-30
              ${open ? 'dropdown-in' : 'dropdown-out' }`}>

              <div className="px-4 py-8 pr-8">
                {/* pr-30 for fuuture when have artwork */}
                <ul>
                  {Menu.map((menu) => (
                    <li key={menu} className="group mx-4 py-2 transition-all duration-300 -translate-x-2">
                      <a className="inline-flex items-center transition-transform group-hover:translate-x-2 group-hover:text-rose-900 ease-out" href={`/#${menu.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)}>
                        
                        {/* The # serves as a page marker to let you move to that section of the page
                            The $'' means that you are processing JS Code */}
                         <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-black">{'>'}</span>
                        {menu}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* <button className="mx-4 px-3 py-1 text-base rounded-3xl bg-white font-semibold hover:bg-gray-200 border-2 border-gray-500 transition duration-300 ">
                  Click me
                </button> */}
                <div className="mx-8 my-2 text-base font-semibold">
                  <ul>
                    <li>My Socials</li>
                    <li className="mb-1">
                      <a href="https://x.com/LyNLinLing" target="_blank"  rel="noopener noreferrer">
                        <img src="Artwork/DropDown/Twitter.png"/>
                      </a>  
                    </li>
                    <li className="mb-1">
                      <a href="https://github.com/Davadakus" target="_blank"  rel="noopener noreferrer">
                        <img src="Artwork/DropDown/GitHub.png"/>
                      </a>  
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          
        </div>
      </div>
    )
  }
  
  export default Header;