import React, { useEffect } from 'react';
import { useState } from "react"
import SectionHeader from "../Components/SectionHeader";
import Dropdown from '../Components/dropdown';


function MainMenu() {
  // const Menu = ["Illustration", "Games", "About", "Other Projects"];
  // const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0)
    useEffect(() => {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
        }, []);

    return (
      <>
        <Dropdown/>
        
        <div className='flex-col'> 
          <div className='relative flex items-center text-xl min-h-40 overflow-hidden pt-[70px] bg-white'>
            <div className='absolute start-0 top-40 min-h-[0px] max-h-[520px] w-auto z-10 ml-3'>
              <img src="Artwork/Logo/LogoVer2.png" draggable="false"/>
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
            <div className="flex justify-center items-center">
              {/* <SectionHeader>Illustrations</SectionHeader> */}
              <div id="illustration" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
                Illustrations
                <img src="Artwork/Chibi/ChibiDraw.webp" draggable="false" className='wiggle-right absolute max-w-[150px] translate-x-45'/>
              </div>
            </div>
            
            <ul className='flex justify-evenly'>
              <li className='flex p-[10px]'>
                <img src="Artwork/Irene.webp" draggable="false" className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex p-[10px]'>
                <img src="Artwork/Archetto.webp" draggable="false" className='max-w-[380px] min-w-[140px] h-full object-cover rounded-4xl'/>
              </li>

              <li className='flex p-[10px]'>
                <img src="Artwork/Practice.webp" draggable="false" className='max-w-[380px] min-w-[140px] h-full  object-cover rounded-4xl'/>
              </li>
            </ul>
          </div>

          <div className ='flex-col py-[50px] bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Games</SectionHeader> */}
            <div id="games" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              Games
              <img src="Artwork/Chibi/ChibiGame.webp" draggable="false" className='wiggle-left absolute max-w-[150px] -translate-x-40'/>
            </div>

            <div className ="flex flex-row justify-center gap-6 mx-20">
              <div className="items-center justify-center max-w-1/2 pr-[20px]">
                <img src="Artwork/GamePreview/ProjectIrene_Preview_1.png" draggable="false" className="object-contain min-w-[314px]"/>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex-auto">
                  <h1 className="block font-semibold text-[30px]">ProjectIrene</h1>
                  <div className="inline-block text-[20px]">
                    <p>Game inspired by Arknights that I made as my first game</p>
                    <p>Single player and combat takes inspiration from Hollow Knight</p>
                  </div>
                </div>
                <div className="">
                  {/* <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button> */}
                  <button className="px-6 py-2 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
                    Click me
                  </button>
                </div>
              </div>
            </div>

            {/* <div className='flex flex-row text-xl min-h-40 max-w-[1000px] gap-6 mx-auto'>
              <div className="bg-amber-300">
                <img src="Artwork/GamePreview/ProjectIrene_Preview_1.png" className='max-w-[500px] min-w-[140px] object-cover '/>
              </div>
              <div className="bg-green-400 w-[500px]">
                <h1 className="block font-semibold text-[24px]">ProjectIrene</h1>

                <p className="block">Game inspired by Arknights that I made as my first game. Single player and combat takes inspiration from Hollow Knight</p>
              </div>
            </div> */}

          </div>

          <div className ='flex-col py-[50px]'>
            {/* <SectionHeader>About</SectionHeader> */}
             <div id="about" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              About
              <img src="Artwork/Chibi/ChibiAbout2.webp" draggable="false" className='wiggle-right absolute max-w-[150px] translate-x-35'/>
            </div>
            <div className='flex flex-wrap justify-evenly text-xl h-[1200px] lg:h-[800px] max-w-[1000px] mx-auto'>
              <div className='flex relative w-[500px] max-h-[800px]'>
                <img src="Artwork/LynLinLing.webp" draggable="false" className='object-contain translate-x-5'/>
              </div>
              <div className='flex items-start justify-center text-center pt-10 w-[500px] max-h-[800px]'>
                <div className='text-center'>
                  <p className='text-3xl font-semibold'>LynLinLing/Davadakus</p>
                  <p className='text-base'>Game Developer, Artist, and Software Developer</p>
                  <br />
                  <p>I want to create games and draw characters I like.</p>
                  <p>Follow me for updates on my games here: blog</p>
                  <br />
                  <p className="text-xl font-semibold">Twitter/X</p>
                  <a className="twitter-timeline text-base" href="https://twitter.com/LyNLinLing?ref_src=twsrc%5Etfw">Tweets by LyNLinLing</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            </div>
          </div>


          <div className ='flex-col py-[50px] bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div id="other-projects" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              Other Projects
              {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
            </div>
            <div className='flex justify-center items-center text-xl min-h-40'>
              Insert Projects
            </div>
          </div>


        
        </div>
      </>
      
    )
  }
  
  export default MainMenu;