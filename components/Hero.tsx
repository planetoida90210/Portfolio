import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, my name is Michał Bryk", "Guy-who-loves-gaming.tsx", "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <div className="relative  w-[120px] h-[120px] mx-auto object-cover">
            <Image src="https://avatars.githubusercontent.com/u/47723901?v=4" alt="hero-image" layout="fill" objectFit="contain" className="rounded-full" />
        </div>
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Web Developer</h2>
            <h1 className="text-5xl lg:6-xl font-semibold px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7AB0A"/>
            </h1> 
            <div className="pt-5">
                 <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}