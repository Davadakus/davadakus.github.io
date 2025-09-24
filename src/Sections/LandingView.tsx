export default function LandingView(){
    return(
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
    );
}