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
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg z-10 rounded-4xl w-80 border-2 border-rose-900 overflow-hidden">
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
          
          <div className='flex justify-center items-center text-xl bg-sky-400 min-h-40'>
            Insert the Animated Banner Here 
          </div>

          <div className ='flex-col bg-sky-400'>
            <p className='flex justify-center items-center text-xl bg-blue-600 py-4'>Illustrations</p>
            

            <div className='flex my-4'>
              <img src="Artwork/Irene.webp" alt='Archetto' className='w-full h-128 object-contain max-w-380 min-w-140 p=[10px]'/>
              {/* <img src="Artwork/Irene.webp" alt='Irene' className='w-full h-128 object-contain'/> */}
              <img src="Artwork/Archetto.webp" alt='Practice' className='w-full h-128 max-w-380 min-w-140 object-contain p=[10px]'/>
              <img src="Artwork/Practice.webp" alt='Practice' className='w-full h-128 max-w-380 min-w-140 object-contain p=[10px]'/>
            </div>

            {/* <div className='grid grid-cols-3 my-4 gap-x-10'>
              <img src="Artwork/Irene.webp" alt='Archetto' className='w-full h-128 object-cover max-w-380 min-w-140 p=[10px]'/>
              <img src="Artwork/Archetto.webp" alt='Practice' className='w-full h-128 max-w-380 min-w-140 object-cover p=[10px]'/>
              <img src="Artwork/Practice.webp" alt='Practice' className='w-full h-128 max-w-380 min-w-140 object-cover p=[10px]'/>
            </div> */}


            {/* Try using Grid for this and figure out how size of the image I want to display */}

            {/* <div className='flex justify-center items-center text-xl bg-blue-50 min-h-40'>
              <img src="Artwork/Archetto.png" alt='Archetto' className='w-full h-64 rounded-4xl my-4 object-contain'/>
              <img src="Artwork/Irene.png" alt='Irene' className='w-full h-64 rounded-4xl my-4 object-contain'/>
              <img src="Artwork/Practice.png" alt='Practice' className='w-full h-64 rounded-4xl my-4 object-contain'/>
            </div> */}
          
          
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