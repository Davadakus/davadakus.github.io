import SectionHeader from "@/Components/SectionHeader";
import Image from 'next/image'

export default function Illustrations(){
    return(
        <div className ='header-section'>
            <div className="flex justify-center items-center">
              <SectionHeader id="illustrations" stickerSrc="/Artwork/Chibi/ChibiDraw.webp" reverse={false}>Illustrations</SectionHeader>
            </div>
            
            <ul className='flex items-center justify-evenly w-[90%] max-w-[2000px] mx-auto gap-5 overflow-hidden'>
              <li>
                <Image
                  src="/Artwork/Irene.webp"
                  alt="art"
                  className="illustration-anim hover:tilt"
                  width={380}
                  height={532}
                  />
              </li>

              <li>
                <Image
                  src="/Artwork/Archetto.webp"
                  alt="art"
                  className="illustration-anim hover:tilt"
                  width={380}
                  height={532}
                  />
              </li>

              <li>
                <Image
                  src="/Artwork/Practice.webp"
                  alt="art"
                  className="illustration-anim hover:tilt"
                  width={380}
                  height={532}
                  />
              </li>
            </ul>
          </div>
    );
}