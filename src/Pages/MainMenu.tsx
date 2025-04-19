import React from "react"
import { useState } from "react"

function MainMenu() {
  const Menu = ["Illustration", "Games", "About", "Other Projects"];
  const [open, setOpen] = useState(false);
    return (
      <>
        <div className='fixed top-0 right-0 bg-amber-300 m-4 text-xl '>
          <p className='flex cursor-pointer' onClick={() => setOpen(!open)}> Menu</p>
          {open && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg z-10 rounded w-80 border border-black">
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
        
        <div className='flex-col bg-sky-950/50'>
          
          <div className='flex justify-center items-center text-xl bg-sky-50 min-h-40'>
            Insert the Animated Banner Here 
          </div>

          <div className ='flex-col bg-sky-50'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>Illustrations</p>
            <div className='flex justify-center items-center text-xl bg-sky-50 min-h-40'>
              Insert the illustrations list here
            </div>
          </div>

          <div className ='flex-col bg-sky-50'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>Games</p>
            <div className='flex justify-center items-center text-xl bg-sky-50 min-h-40'>
              Insert the game you are working on rn
            </div>
          </div>

          <div className ='flex-col bg-sky-50'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>About</p>
            <div className='flex w-full justify-center items-center text-xl bg-sky-50 min-h-40'>
              <div className='bg-red-600 w-1/2 justify-end text-center flex'>
                This is my OC
              </div>
              <div className='bg-green-600 w-1/2 flex flex-col items-start justify-center text-center'>
                <div className='text-center'>
                  <p className='text-3xl'>LynLinLing/Davadakus</p>
                  <p className='text-base'>Game Developer, Artist, and Software Developer</p>
                  <br />
                  <p>I want to create games and draw characters I like.</p>
                  <p>Follow me for updates on my games here: blog</p>
                </div>
              </div>
            </div>
          </div>


          <div className ='flex-col bg-sky-50'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>Other Projects</p>
            <div className='flex justify-center items-center text-xl bg-sky-50 min-h-40'>
              Insert Projects
            </div>
          </div>


        
        </div>
      </>
      
    )
  }
  
  export default MainMenu;