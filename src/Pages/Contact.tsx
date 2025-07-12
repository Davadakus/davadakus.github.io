import React from "react"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Contact() {
    return (
      <>
        <Header/>
        <div className='flex justify-center min-h-screen items-center '>
          <div className="text-2xl inline-block text-center">
            <p>This page is currently in progress</p>
            <br></br>
            <p>You can send me an email at:</p>
            <p>arcretiodavadakus@gmail.com</p>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default Contact;