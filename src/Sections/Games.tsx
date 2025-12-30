import SectionHeader from "@/Components/SectionHeader";
import Image from 'next/image'

export default function Games(){
    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
           <SectionHeader id="games" stickerSrc="/Artwork/Chibi/ChibiGame.webp" reverse={true}>Games</SectionHeader>
            <div className ="flex flex-wrap justify-center max-w-[2000px] gap-6 mx-auto">
              <div className="projects-card-image">
                <Image
                  src="/Artwork/GamePreview/ProjectIrene_Preview_1.png"
                  alt="button-icon"
                  draggable="false"
                  width={900}
                  height={500}
                  />
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
    );
}