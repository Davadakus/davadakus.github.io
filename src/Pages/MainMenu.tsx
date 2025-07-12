import React, { useEffect } from 'react';
import { useState } from "react"
import SectionHeader from "../Components/SectionHeader";
import Dropdown from '../Components/dropdown';
import SkillTable from '../Components/SkillTable';
import Footer from '../Components/Footer';
// import Magnifier from '../Components/Magnifier';

function MainMenu() {
  // const Menu = ["Illustration", "Games", "About", "Other Projects"];
  // const [open, setOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);


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
              <div id="illustrations" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
                Illustrations
                <img src="Artwork/Chibi/ChibiDraw.webp" draggable="false" className='wiggle-right absolute max-w-[150px] translate-x-45'/>
              </div>
            </div>
            
            <ul className='flex items-center justify-evenly w-[90%] max-w-[2000px] mx-auto gap-5 overflow-hidden'>
              <li>
                <img src="Artwork/Irene.webp" draggable="false" className="illustration-anim hover:tilt"/>
              </li>

              <li>
                <img src="Artwork/Archetto.webp" draggable="false" className="illustration-anim hover:tilt"/>
              </li>

              <li>
                <img src="Artwork/Practice.webp" draggable="false" className="illustration-anim hover:tilt"/>
              </li>
            </ul>
          </div>

          <div className ='flex-col py-[50px] bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Games</SectionHeader> */}
            <div id="games" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              Games
              <img src="Artwork/Chibi/ChibiGame.webp" draggable="false" className='wiggle-left absolute max-w-[150px] -translate-x-40'/>
            </div>

            <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
              <div className="w-[45%] min-w-[435px]">
                <img src="Artwork/GamePreview/ProjectIrene_Preview_1.png" draggable="false" className="object-contain"/>
              </div>
              <div className="flex flex-col w-[45%] gap-10">
                <div className="flex-auto">
                  <h1 className="block font-semibold text-[30px]">ProjectIrene</h1>
                  <div className="inline-block text-[20px]">
                    <p>Game inspired by Arknights that I made as my first game</p>
                    <p>Single player and combat takes inspiration from Hollow Knight</p>
                    <br></br>
                    <p>Still in development</p>
                    <p>Stay Tuned for a blog post (´• ω •`)...</p>
                  </div>
                </div>
                
                {/* <div className="">
                  <button className="px-6 py-2 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
                    Click me
                  </button> 
                </div> */}

              </div>
            </div>
          </div>

          <div className ='relative flex-col py-[50px] overflow-clip'>
            {/* <SectionHeader>About</SectionHeader> */}
             <div id="about" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              About
              <img src="Artwork/Chibi/ChibiAbout2.webp" draggable="false" className='wiggle-right absolute max-w-[150px] translate-x-35'/>
            </div>

            <div className='flex flex-wrap justify-evenly text-xl h-[1200px] lg:h-[800px] max-w-[1000px] mx-auto'>
              <div className='flex relative w-[500px] max-h-[800px]'>
                <img src="Artwork/About/MeText.png" draggable="false" className='absolute object-contain w-[200px] translate-x-2 wiggle'/>
                <img src="Artwork/LynLinLing.webp" draggable="false" className='object-contain translate-x-5'/>
                {/* <Magnifier src="Artwork/LynLinLing.webp" zoom={2} className="translate-x-5" /> */}
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
              
              {/* Extra Hidden Section Start*/}
              {/* This is the whole area */}
              <div
                className={`absolute top-[145px] w-full h-[792px] bg-zinc-400 rounded-2xl z-15 transition-transform duration-700 ease-in-out 
                  ${showOverlay ? "translate-x-1/2" : "translate-x-full"}
                `}
              >
                {/* This is the content */}
                <div className="flex flex-row z-15">
                  <button
                  onClick={() => setShowOverlay(!showOverlay)}
                  className="bg-zinc-400 text-white h-fit px-4 py-2 translate-y-[350px] -translate-x-[52px] rounded hover:bg-zinc-800 transition text-[52px] duration-500 ease-in-out"
                  >
                    {showOverlay ? ">" : "<"}
                  </button>

                  <div className='flex flex-grow items-start justify-start text-center text-black pt-10 w-[650px] max-h-[800px]'>
                    <div className='text-center'>
                      <p className='text-3xl font-semibold mb-2'>Education</p>
                      <p className='text-2xl font-semibold'>University of Sydney (2021-2024)</p>
                      <p className='text-xl font-semibold'>Bachelor of Computing</p>
                      <p className='text-base'>Major in Software Development</p>
                      <p className='text-sm'>Minor in Digital Music</p>
                        <br />
                      <p className='text-3xl font-semibold'>Technical Skills</p>
                        <SkillTable/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Extra Hidden Section End*/}
            </div>
          </div>


          <div className ='flex-col py-[50px] bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div id="other-projects" className='flex justify-center items-center text-[35px] mb-[35px] font-semibold border border-transparent relative scroll-mt-[100px]'>
              Other Projects
              {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
            </div>
            <div className="space-y-20">
              <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
                <div className="w-[45%]">
                  <img src="Artwork/OtherProject/BeaconVisualizer.png" draggable="false" className="object-contain"/>
                </div>
                <div className="flex flex-col w-[45%] gap-10">
                  <div className="flex-auto">
                    <h1 className="block font-semibold text-[30px]">Beacon Visualizer (2024)</h1>
                    <div className="inline-block text-[20px]">
                      <p>A React Project me and my friend made for a Hackathon in 24 Hours</p>
                      <p>Simulates live tracking of a beacon travelling in a rocket displaying relevant data</p>
                      <br></br>
                      <p>Role: Website design & layout, simulation of beacon, and managing simulated data</p>
                      <br></br>
                      <p>Tech: React, TailWindCSS, Vite, D3.js, Three.js, GitHub</p>
                    </div>
                  </div>
                  <div className="projects-link">
                    <a href="https://github.com/Davadakus/ANT61Hackathon" target="_blank"  rel="noopener noreferrer">
                      <img src="Artwork/DropDown/GitHub.png"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=Cik_anyDUuw" target="_blank" rel="noopener noreferrer">
                      <img src="Artwork/DropDown/YouTube.png"/>
                    </a>  
                  </div>

                </div>
              </div>
              
              <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">

                <div className="flex flex-col w-[45%] gap-10">
                  <div className="flex-auto text-end">
                    <h1 className="block font-semibold text-[30px]">Game Based Learning Website (2024)</h1>
                    <div className="inline-block text-[20px]">
                      <p>A React Project made by a group of 7 for a University Capstone Project</p>
                      <p>Allows you to upload your class materials PDF to an AI Tutor (Gemini) and group them</p>
                      <p>The AI generates questions for users to test themselves</p>
                      <p>You can ask the AI regarding specific questions on screen and will give you feedback</p>
                      
                      <br></br>
                      <p>Role: Responsible for leading the frontend team, designing and making the pages, certain features, and code review</p>
                      <br></br>
                      <p>Tech: React, TailWindCSS, Vite, FastAPI, Docker, GitHub</p>
                    </div>
                  </div>
                  
                  <div className="projects-link-reverse">
                    <a href="https://youtu.be/gqQlONmrvE4" target="_blank" rel="noopener noreferrer">
                      <img src="Artwork/DropDown/YouTube.png"/>
                    </a>  
                  </div>
                </div>
                <div className="w-[45%]">
                  <img src="Artwork/OtherProject/GBL.png" draggable="false" className="object-contain"/>
                </div>
              </div>

              <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
                <div className="w-[45%]">
                  <img src="Artwork/OtherProject/Haato's Diary.png" draggable="false" className="object-contain"/>
                </div>
                <div className="flex flex-col w-[45%] gap-10">
                  <div className="flex-auto">
                    <h1 className="block font-semibold text-[30px]">Haato's Diary (2022)</h1>
                    <div className="inline-block text-[20px]">
                      <p>An open-source, fan-made, visual novel I had a small hand in</p>
                      <p>First experience working with others through GitHub Forks and coordinating through a trello board</p>
                      <br></br>
                      <p>Role: Implement some translations for Japanese Users</p>
                      <br></br>
                      <p>Tech: Python, RenPy</p>
                    </div>
                  </div>
                  <div className="projects-link">
                    <a href="https://wws-haato.itch.io/haatos-diary" target="_blank"  rel="noopener noreferrer">
                      <img src="Artwork/DropDown/Website.png"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=tRLvKY_WZwU" target="_blank" rel="noopener noreferrer">
                      <img src="Artwork/DropDown/YouTube.png"/>
                    </a>  
                  </div>

                </div>
              </div>
                  


            </div>
            
          </div>

          <Footer/>
        
        </div>

      
      </>
      
    )
  }
  
  export default MainMenu;