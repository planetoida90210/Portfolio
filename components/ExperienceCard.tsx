import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 xl:mt-20 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer">
        <motion.img 
         initial={{ y: -100,opacity: 0 }}
         transition={{ duration: 1.2 }}
         whileInView={{ opacity: 1,y: 0 }}
         viewport={{ once: true }}
         className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         src="https://avatars.githubusercontent.com/u/47723901?v=4"
         alt="experience hero image"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Web Developer</h4>
            <p className="font-bold uppercase text-2xl mt-1">Microsoft</p>
            <div className="flex space-x-2 my-2">

            </div>
            <p className="uppercase py-5 text-gray-300">Started work ... Ended....</p>
            <ul className="list-disc space-y-4 text-lg">
                <li>obowiazki</li>
                <li>obowiazki</li>
                <li>obowiazki</li>
                <li>obowiazki</li>
                <li>obowiazki</li>
            </ul>
        </div>
    </article>
  )
}