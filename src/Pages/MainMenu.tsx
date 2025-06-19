import React from "react"
import { useState } from "react"

function MainMenu() {
  const Menu = ["Illustration", "Games", "About", "Other Projects"];
  const [open, setOpen] = useState(false);
    return (
      <>
        <div className='fixed top-0 right-0 bg-amber-300 m-4 text-xl z-20'>
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
        
        <div className='flex-col bg-sky-950/50'>
          
          <div className='relative flex items-center text-xl bg-white min-h-40 overflow-hidden'>
            <div className='absolute border start-0 top-40 min-h-[0px] max-h-[520px] w-auto z-10 ml-3'>
              <img src="Artwork/Logo/LogoHor.png"/>
            </div>


            {/* <video src="Artwork/LynLinLing_3.mp4" autoPlay muted playsInline loop className='z-0 max-h-[850px] w-full object-[50%_50%] object-cover relative ml-20 mt-25 border'/> */}
            <div className="w-full h-[650px] overflow-hidden ml-20 pt-[70px] border relative">
              <video 
                src="Artwork/LynLinLing_3.mp4" 
                autoPlay 
                muted 
                playsInline 
                loop 
                className="w-full h-full object-[50%_50%] object-cover aspect-auto"
              />
            </div>
          </div>

          <div className ='flex-col bg-sky-400'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>Illustrations</p>
            

            <ul className='flex justify-evenly'>
              <li className='flex border border-amber-800 p-[10px]'>
                <img src="Artwork/Irene.webp" alt='Irene' className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex border border-amber-800 p-[10px]'>
                <img src="Artwork/Archetto.webp" alt='Archetto' className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex border border-amber-800 p-[10px]'>
                <img src="Artwork/Practice.webp" alt='Practice' className='max-w-[380px] min-w-[140px] h-full  object-cover rounded-4xl'/>
              </li>
            </ul>
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
                <img src="Artwork/LynLinLing.webp"/>
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