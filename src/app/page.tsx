"use client"

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LandingView from '../Sections/LandingView';
import Illustrations from '../Sections/Illustrations';
import Games from '../Sections/Games';
import About from '../Sections/About';
import OtherProjects from '../Sections/OtherProjects';
// import Magnifier from '../Components/Magnifier';

function MainMenu() {
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