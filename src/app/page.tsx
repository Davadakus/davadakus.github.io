"use client"

import React, { useEffect } from 'react';
import { useState } from "react"
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingView from './Sections/LandingView';
import Illustrations from './Sections/Illustrations';
import Games from './Sections/Games';
import About from './Sections/About';
import OtherProjects from './Sections/OtherProjects';
// import Magnifier from '../Components/Magnifier';

function MainMenu() {
  // const Menu = ["Illustration", "Games", "About", "Other Projects"];
  // const [open, setOpen] = useState(false);
  // const [showOverlay, setShowOverlay] = useState(false);


  //   const [count, setCount] = useState(0)
    // useEffect(() => {
    //   if (window.twttr) {
    //     window.twttr.widgets.load();
    //   }
    //     }, []);

    return (
      <>
        <Header/>
        <div className='flex-col'> 
          <LandingView />
          <Illustrations />
          <Games />
          <About />
          <OtherProjects />
          <Footer/>
        </div>

      
      </>
      
    )
  }
  
  export default MainMenu;