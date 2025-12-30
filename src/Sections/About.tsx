import { useState } from "react";
import SkillTable from "../Components/SkillTable";
import Image from "next/image";
import SectionHeader from "@/Components/SectionHeader";

export default function About(){
    const [showOverlay, setShowOverlay] = useState(false);
    
    return(
        <div className ='header-section'>
            <SectionHeader id="about" stickerSrc="/Artwork/Chibi/ChibiAbout2.webp" reverse={false}>About</SectionHeader>
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
                          <SkillTable />
                        </div>
                      </div>
                  </div>
                </div>
              </div>

            <div className='flex flex-wrap justify-evenly text-xl h-[1250px] lg:h-[800px] max-w-[1000px] mx-auto'>
              <div className='flex relative w-[500px] max-h-[800px]'>
                <Image src="/Artwork/About/MeText.png" draggable="false" width={150} height={150} alt="subtext" className='absolute object-contain w-[200px] translate-x-2 wiggle'/>
                <Image src="/Artwork/LynLinLing.webp" draggable="false" width={500} height={800} alt="avatar" className='object-contain translate-x-5'/>
                {/* <Magnifier src="Artwork/LynLinLing.webp" zoom={2} className="translate-x-5" /> */}
              </div>
              <div className='flex items-start justify-center text-center pt-10 w-[500px] max-h-[800px]'>
                <div className='text-center'>
                  <p className='text-header'>LynLinLing/Davadakus</p>
                  <p className='text-subheader'>Game Developer, Artist, and Software Developer</p>
                    <br />
                  <p className='text-body'>I&apos;m a software developer learning Web Development</p>
                  <p className='text-body'>I want to create games and draw characters I like.</p>
                    <br />
                  <p className="text-header2">Twitter/X</p>
                  
                  
                  <a className="twitter-timeline text-base" href="https://twitter.com/LyNLinLing?ref_src=twsrc%5Etfw">Tweets by LyNLinLing</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            </div>
          </div>
    );
}