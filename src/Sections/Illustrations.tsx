export default function Illustrations(){
    return(
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
    );
}