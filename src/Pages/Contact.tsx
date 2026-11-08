import React from "react"
import Header from "../Components/template/Header";
import Footer from "../Components/template/Footer";

export default function Contact() {
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