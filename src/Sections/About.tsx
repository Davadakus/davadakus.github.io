import { useState } from "react";
import SkillTable from "../Components/SkillTable";

export default function About(){
    const [showOverlay, setShowOverlay] = useState(false);
    
    return(
        <div className ='header-section'>
            {/* <SectionHeader>About</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="about" className='header-title'>
                About
                <img src="Artwork/Chibi/ChibiAbout2.webp" draggable="false" className='header-sticker-2 wiggle-right translate-x-28 sm:translate-x-35'/>
              </div>
            </div>

            {/* {/* <div className="absolute flex pointer-events-none flex-wrap flex-row w-full h-[1200px] lg:h-[800px] z-10">
                <div className="flex w-[45%] h-[800px]"></div>
                <div className={`flex flex-row lg:flex-row lg:w-[55%] w-full lg:h-[800px] h-[250px] transition duration-500 ease-in-out items-center ${
                                  showOverlay ? 'translate-x-0' : 'translate-x-[calc(100%-60px)]'}`}>
                  <button
                    onClick={() => setShowOverlay(!showOverlay)}
                    className="bg-zinc-400/50 text-white h-fit w-[62px] py-1 px-5 rounded hover:bg-zinc-800/50 lg:text-[52px] text-[32px] pointer-events-auto">
                      {showOverlay ? ">" : "<"}
                  </button>

                  <div className={`flex flex-grow bg-white items-center lg:justify-start justify-center lg:p-12 p-5 rounded-xl `}>
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
              </div> */}

            <div className='flex flex-wrap justify-center text-xl max-w-[2000px] mx-auto gap-10'>
              <div className='flex relative'>
                <img src="Artwork/Lyn.webp" draggable="false" className='object-cover size-[400px]'/>
              </div>
              <div className='flex items-start justify-center text-center pt-10 '>
                <div className='text-left space-y-5'>
                  <div>
                    <p className='text-header'>LynLinLing/Davadakus</p>
                    <p className='text-subheader'>Software Developer & Artist</p>
                  </div>
                  <div className="space-y-1">
                    <p className='text-body'>My passion is in Software Development and Illustration.</p>
                    <p className='text-body'>This portfolio is a collection of past projects and artworks I've worked on</p>
                    <p className='text-body'>My favourite game is Arknights as that is the motif of my design</p>
                  </div>
                  {/* <p className="text-header2">Twitter/X</p>
                  <a className="twitter-timeline text-base" href="https://twitter.com/LyNLinLing?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer">Tweets by LyNLinLing</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
                </div>
              </div>
            </div>
          </div>
    );
}