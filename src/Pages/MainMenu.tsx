import React, { useEffect } from 'react';
import { useState } from "react"
import SectionHeader from "../Components/SectionHeader";
import Dropdown from '../Components/dropdown';

function MainMenu() {
  // const Menu = ["Illustration", "Games", "About", "Other Projects"];
  // const [open, setOpen] = useState(false);

    return (
      <>
        <Dropdown/>
        
        <div className='flex-col'> 
          <div className='relative flex items-center text-xl min-h-40 overflow-hidden pt-[70px] bg-white'>
            <div className='absolute start-0 top-40 min-h-[0px] max-h-[520px] w-auto z-10 ml-3'>
              <img src="Artwork/Logo/LogoVer2.png"/>
            </div>


            {/* <video src="Artwork/LynLinLing_3.mp4" autoPlay muted playsInline loop className='z-0 max-h-[850px] w-full object-[50%_50%] object-cover relative ml-20 mt-25 border'/> */}
            <div className="w-full h-[650px] overflow-hidden ml-20 relative">
              <video 
                src="Artwork/LynLinLing_3.mp4" 
                autoPlay 
                muted 
                playsInline 
                loop 
                className="w-full h-full object-[0%_50%] object-cover aspect-auto"
              />
            </div>
          </div>

          <div className ='flex-col py-[50px]'>
            <SectionHeader>Illustrations</SectionHeader>
            
            <ul className='flex justify-evenly'>
              <li className='flex p-[10px]'>
                <img src="Artwork/Irene.webp" alt='Irene' className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex p-[10px]'>
                <img src="Artwork/Archetto.webp" alt='Archetto' className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex p-[10px]'>
                <img src="Artwork/Practice.webp" alt='Practice' className='max-w-[380px] min-w-[140px] h-full  object-cover rounded-4xl'/>
              </li>
            </ul>
          </div>

          <div className ='flex-col py-[50px] bg-gray-300'>
           <SectionHeader>Games</SectionHeader>
            <div className='flex justify-center items-center text-xl min-h-40'>
              Insert the game you are working on rn
            </div>
          </div>

          <div className ='flex-col py-[50px]'>
            <SectionHeader>About</SectionHeader>
            <div className='flex flex-wrap justify-evenly text-xl h-[800px] max-w-[1000px] mx-auto'>
              <div className='bg-red-600 justify-end text-center flex relative w-[500px] max-h-[800px]'>
                <img src="Artwork/LynLinLing.webp" className='object-contain flex'/>
              </div>
              <div className='bg-green-600 flex items-start justify-center text-center w-[500px] max-h-[800px]'>
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


          <div className ='flex-col py-[50px] bg-gray-300'>
           <SectionHeader>Other Projects</SectionHeader>
            <div className='flex justify-center items-center text-xl min-h-40'>
              Insert Projects
            </div>
          </div>


        
        </div>
      </>
      
    )
  }
  
  export default MainMenu;