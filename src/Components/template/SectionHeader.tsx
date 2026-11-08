import { ReactNode } from "react";

interface SectionHeaderProps{
  id: string;
  stickerSrc?: string;
  children: ReactNode
}

export default function SectionHeader({ id, stickerSrc, children }: SectionHeaderProps) {
  return (
    <div className="flex justify-center items-center">
      <div id={id} className='header-title'>
        {children}
        <img src={stickerSrc} draggable="false" className='header-sticker-2 wiggle-left -translate-x-30 sm:-translate-x-40 '/>
      </div>
    </div>
  );
}