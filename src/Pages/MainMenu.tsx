import React, { useEffect } from 'react';
import { useState } from "react"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LandingView from '../Sections/LandingView';
import Illustrations from '../Sections/Illustrations';
import Games from '../Sections/Games';
import About from '../Sections/About';
import OtherProjects from '../Sections/OtherProjects';
import Experience from '../Sections/Experience';
// import Magnifier from '../Components/Magnifier';

function MainMenu() {
  // const Menu = ["Illustration", "Games", "About", "Other Projects"];
  // const [open, setOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  // The Experience timeline node that's filtering Other Projects (null shows every project)
  const [selectedNode, setSelectedNode] = useState<string | null>(null);


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
          <LandingView />
          <Illustrations />
          {/* <Games /> */}
          <About />
          <Experience selectedNode={selectedNode} onSelectNode={setSelectedNode} />
          <OtherProjects selectedNode={selectedNode} onClearNode={() => setSelectedNode(null)} />
          <Footer/>
        
        </div>

      
      </>
      
    )
  }
  
  export default MainMenu;