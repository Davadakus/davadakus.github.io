import React, { useEffect } from 'react';
import { useState } from "react"
import SectionHeader from "../Components/SectionHeader";
import Header from '../Components/Header';
import SkillTable from '../Components/SkillTable';
import Footer from '../Components/Footer';
import Button from '../Components/Button';
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
        <Header/>
        
        <div className='flex-col'> 
          <div className='relative flex items-center text-xl min-h-40 overflow-hidden bg-white'>
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
          
          <div className ='header-section'>
            <div className="flex justify-center items-center">
              
              {/* <SectionHeader>Illustrations</SectionHeader> */}
              <div id="illustrations" className='header-title'>
                Illustrations
                <img src="Artwork/Chibi/ChibiDraw.webp" draggable="false" className="header-sticker wiggle-right translate-x-32 sm:translate-x-45"/>
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

          <div className ='header-section bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Games</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="games" className='header-title'>
                Games
                <img src="Artwork/Chibi/ChibiGame.webp" draggable="false" className='header-sticker-2 wiggle-left -translate-x-30 sm:-translate-x-40 '/>
              </div>
            </div>

            <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
              <div className="projects-card-image">
                <img src="Artwork/GamePreview/ProjectIrene_Preview_1.png" draggable="false" className="object-contain"/>
              </div>
              <div className="projects-card-body">
                <div className="flex-auto">
                  <h1 className="text-header">ProjectIrene</h1>
                  <div className="text-body">
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

          <div className ='header-section'>
            {/* <SectionHeader>About</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="about" className='header-title'>
                About
                <img src="Artwork/Chibi/ChibiAbout2.webp" draggable="false" className='header-sticker-2 wiggle-right translate-x-28 sm:translate-x-35'/>
              </div>
            </div>

            <div className="absolute flex flex-wrap flex-row w-full h-[1200px] lg:h-[800px] z-10">
                <div className="flex w-[45%] h-[800px]"></div>
                {/* <div className="flex w-full flex-row-reverse lg:flex-row lg:w-[50%] h-[800px]"> */}
                <div className={`flex flex-row lg:flex-row lg:w-[55%] w-full lg:h-[800px] h-[250px] transition duration-500 ease-in-out items-center ${
                                  showOverlay ? 'translate-x-0' : 'translate-x-[calc(100%-60px)]'}`}>
                  <button
                    onClick={() => setShowOverlay(!showOverlay)}
                    className="bg-zinc-400 text-white h-fit w-[62px] lg:py-2 lg:px-4 p-0 rounded hover:bg-zinc-800 lg:text-[52px] text-[32px]">
                      {showOverlay ? ">" : "<"}
                  </button>

                  <div className={`flex flex-grow bg-white items-center lg:justify-start justify-center lg:p-12 p-5 rounded-xl`}>
                    <div className='text-center flex gap-5 lg:flex-col flex-row items-center '>
                        <div>
                          <p className='text-header font-semibold mb-2'>Education</p>
                          <p className='text-header2 font-semibold'>University of Sydney (2021-2024)</p>
                          <p className='text-subheader font-semibold'>Bachelor of Computing</p>
                          <p className='text-tiny'>Major in Software Development</p>
                          <p className='text-tiny'>Minor in Digital Music</p>
                            <br />
                        </div>
                        <div>
                          <p className='text-header font-semibold'>Technical Skills</p>
                          <SkillTable/>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

            <div className='flex flex-wrap justify-evenly text-xl h-[1250px] lg:h-[800px] max-w-[1000px] mx-auto'>
              <div className='flex relative w-[500px] max-h-[800px]'>
                <img src="Artwork/About/MeText.png" draggable="false" className='absolute object-contain w-[200px] translate-x-2 wiggle'/>
                <img src="Artwork/LynLinLing.webp" draggable="false" className='object-contain translate-x-5'/>
                {/* <Magnifier src="Artwork/LynLinLing.webp" zoom={2} className="translate-x-5" /> */}
              </div>
              <div className='flex items-start justify-center text-center pt-10 w-[500px] max-h-[800px]'>
                <div className='text-center'>
                  <p className='text-header'>LynLinLing/Davadakus</p>
                  <p className='text-subheader'>Game Developer, Artist, and Software Developer</p>
                    <br />
                  <p className='text-body'>I'm a software developer learning Web Development</p>
                  <p className='text-body'>I want to create games and draw characters I like.</p>
                    <br />
                  <p className="text-header2">Twitter/X</p>
                  <a className="twitter-timeline text-base" href="https://twitter.com/LyNLinLing?ref_src=twsrc%5Etfw">Tweets by LyNLinLing</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            </div>
          </div>


          <div className ='header-section bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="other-projects" className='header-title'>
                Other Projects
                {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
              </div>
            </div>
            <div className="space-y-20">
              <div className ="projects-card-reverse">
                <div className="projects-card-body">
                  <div className="flex-auto text-end">
                    <h1 className="text-header">Recreating Discord (2025)</h1>
                    <div className="text-body">
                      <p>Replicating Discord's layout and DM functionality; experimenting full-stack development</p>
                      <p>React + Vite for Frontend; Node.js and Express.js for backend</p>
                      <p>Able to send messages and view chat history </p>
                      <p>Links below show just the frontend implementation for now</p>

                      <br></br>
                      <div className="text-tiny">
                        <p><strong>Role:</strong> Fullstack</p>
                        <p><strong>Tech:</strong> React, TailWindCSS, Vite, Express.js, Node.js, GitHub</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="projects-link-reverse">
                    <Button
                      link="https://github.com/Davadakus/discord-demo"
                      path="Artwork/DropDown/GitHub.png"
                    />
                    <Button
                      link="https://youtu.be/Iu_dQNK4H24"
                      path="Artwork/DropDown/YouTube.png"
                    />
                  </div>
                </div>
                <div className="projects-card-image">
                  <img src="Artwork/OtherProject/DiscordDemo.png" draggable="false" className="object-contain"/>
                </div>
              </div>
              <div className ="projects-card">
                <div className="projects-card-image">
                  <img src="Artwork/OtherProject/BeaconVisualizer.png" draggable="false" className="object-contain"/>
                </div>
                <div className="projects-card-body">
                  <div className="flex-auto">
                    <h1 className="text-header">Beacon Visualizer (2024)</h1>
                    <div className="text-body">
                      <p>A React Project me and my friend made for a Hackathon in 24 Hours</p>
                      <p>Simulates live tracking of a beacon travelling in a rocket displaying relevant data</p>
                      <br></br>
                      <div className="text-tiny">
                        <p><strong>Role:</strong> Website design & layout, simulation of beacon, and managing simulated data</p>
                        <p><strong>Tech</strong>: React, TailWindCSS, Vite, D3.js, Three.js, GitHub</p>
                      </div>
                    </div>
                  </div>
                  <div className="projects-link">
                    <Button
                      link="https://github.com/Davadakus/ANT61Hackathon"
                      path="Artwork/DropDown/GitHub.png"
                    />
                    <Button
                      link="https://www.youtube.com/watch?v=Cik_anyDUuw"
                      path="Artwork/DropDown/YouTube.png"
                    />
                  </div>

                </div>
              </div>
              
              <div className ="projects-card-reverse">
                <div className="projects-card-body">
                  <div className="flex-auto text-end">
                    <h1 className="text-header">Game Based Learning Website (2024)</h1>
                    <div className="text-body">
                      <p>A React Project made by a group of 7 for a University Capstone Project</p>
                      <p>Allows you to upload your class materials PDF to an AI Tutor (Gemini) and group them</p>
                      <p>The AI generates questions for users to test themselves</p>
                      <p>You can ask the AI regarding specific questions on screen and will give you feedback</p>
                      <br></br>
                      <div className="text-tiny">
                        <p><strong>Role:</strong> Responsible for leading the frontend team, designing and making the pages, certain features, and code review</p>
                        <p><strong>Tech:</strong> React, TailWindCSS, Vite, FastAPI, Docker, GitHub</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="projects-link-reverse">
                    <Button
                      link="https://youtu.be/gqQlONmrvE4"
                      path="Artwork/DropDown/YouTube.png"
                    />
                  </div>
                </div>
                <div className="projects-card-image">
                  <img src="Artwork/OtherProject/GBL.png" draggable="false" className="object-contain"/>
                </div>
              </div>

              <div className ="projects-card">
                <div className="projects-card-image">
                  <img src="Artwork/OtherProject/Haato's Diary.png" draggable="false" className="object-contain"/>
                </div>
                <div className="projects-card-body">
                  <div className="flex-auto">
                    <h1 className="text-header">Haato's Diary (2022)</h1>
                    <div className="text-body">
                      <p>An open-source, fan-made, visual novel I had a small hand in</p>
                      <p>First experience working with others through GitHub Forks and coordinating through a trello board</p>
                      <br></br>
                      
                      <div className="text-tiny">
                        <p ><strong>Role:</strong> Implement some translations for Japanese Users</p>
                        <p><strong>Tech:</strong> Python, RenPy</p>
                      </div>
                    </div>
                  </div>
                  <div className="projects-link">
                    <Button
                      link="https://wws-haato.itch.io/haatos-diary"
                      path="Artwork/DropDown/Website.png"
                    />
                    <Button
                      link="https://www.youtube.com/watch?v=tRLvKY_WZwU"
                      path="Artwork/DropDown/YouTube.png"
                    />
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