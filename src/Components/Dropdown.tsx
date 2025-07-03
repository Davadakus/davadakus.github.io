import React from "react"
import { useState } from "react"

function Dropdown() {
    const Menu = ["Illustrations", "Games", "About", "Other Projects"];
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <div draggable="false" className="fixed top-0 right-0 m-4 text-[24px] font-semibold z-20">
          <p className="cursor-pointer" onClick={() => setOpen(!open)}>MENU</p>
          
            <div className={`fixed top-0 right-0 mr-5 bg-white shadow-lg rounded-4xl border-2 border-rose-900 overflow-hidden z-30
              ${open ? 'dropdown-in' : 'dropdown-out' }`}>

              <div className="px-8 py-12 pr-30">
                <ul>
                  {Menu.map((menu) => (
                    <li key={menu}>
                      <a className="cursor-pointer mx-4 py-2 hover:bg-stone-200" href={`#${menu.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)}>
                        
                        {/* The # serves as a page marker to let you move to that section of the page
                            The $'' means that you are processing JS Code */}

                        {menu}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* <button className="mx-4 px-3 py-1 text-base rounded-3xl bg-white font-semibold hover:bg-gray-200 border-2 border-gray-500 transition duration-300 ">
                  Click me
                </button> */}
                <div className="mx-4 my-5 text-base font-semibold">
                  <ul>
                    <li>My Socials</li>
                    <li className="mb-2">
                      <a href="https://x.com/LyNLinLing">
                        <img src="Artwork/DropDown/Twitter.png"/>
                      </a>  
                    </li>
                    <li className="mb-2">
                      <a href="https://github.com/Davadakus">
                        <img src="Artwork/DropDown/GitHub.png"/>
                      </a>  
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          
        </div>
      </>
    )
  }
  
  export default Dropdown;