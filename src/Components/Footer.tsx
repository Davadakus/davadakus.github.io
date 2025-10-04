import Link from "next/link";
import React from "react"

function Footer() {
    return(
        <footer className="flex bg-white text-center align-middle justify-evenly mx-auto">
            <div className="flex flex-col py-5 pb-2">
                <ul className="flex flex-row py-4 space-x-3">
                    <li>
                        <Link href="/#illustrations">Illustrations </Link>
                        {/* <a href="#illustrations">Illustrations</a> */}
                    </li>
                    <li>
                        <Link href="/#games">Games </Link>
                    </li>
                    <li>
                        <Link href="/#about">About </Link>
                    </li>
                    <li>
                        <Link href="/#other-projects">Other Projects </Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact </Link>
                    </li>
                </ul>
                <p>© 2025 LynLinLing</p>
            </div>
        </footer>
    )
}

export default Footer;