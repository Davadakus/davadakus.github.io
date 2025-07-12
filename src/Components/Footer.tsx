import React from "react"
import { useState } from "react"

function Footer() {
    return(
        <footer className="flex bg-white text-center align-middle justify-evenly mx-auto">
            <div className="flex flex-col py-5 pb-2">
                <ul className="flex flex-row py-4 space-x-3">
                    <li>
                        <a href="#illustrations">Illustrations</a>
                    </li>
                    <li>
                        <a href="#games">Games</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#other-projects">Other Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <p>© 2025 LynLinLing</p>
            </div>
        </footer>
    )
}

export default Footer;