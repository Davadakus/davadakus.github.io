import React from "react"
import { useState } from "react"

function Dropdown() {
    const Menu = ["Illustration", "Games", "About", "Other Projects"];
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <div className='fixed top-0 right-0 m-4 text-[24px] z-20'>
          <p className='flex cursor-pointer' onClick={() => setOpen(!open)}> Menu</p>
          {open && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-4xl w-80 border-2 border-rose-900 overflow-hidden z-20">
              <ul>
                {Menu.map((menu) => (
                  <li className="cursor-pointer px-4 py-2 hover:bg-stone-200" key={menu}>
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
  
  export default Dropdown;