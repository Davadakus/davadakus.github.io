import { ReactNode } from "react";
import Image from 'next/image'

interface SectionHeaderProps{
  id: string;
  stickerSrc: string;
  reverse?: boolean;
  children: ReactNode
}

export default function SectionHeader({ id, stickerSrc="", reverse, children }: SectionHeaderProps) {
  return (
    <div className="flex justify-center items-center">
      <div id={id} className='header-title'>
        {children}
        <Image
            src={stickerSrc}
            alt="header-art"
            draggable="false"
            className={`${reverse ? "header-sticker-2 wiggle-left -translate-x-30 sm:-translate-x-40" : "header-sticker-2 wiggle-right translate-x-28 sm:translate-x-40"}`}
            width={150}
            height={150}
          />
      </div>
    </div>
  );
}