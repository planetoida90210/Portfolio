import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
         initial={{ y: -100,opacity: 0 }}
         transition={{ duration: 1.2 }}
         whileInView={{ opacity: 1,y: 0 }}
         viewport={{ once: true }}
         className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         src="https://avatars.githubusercontent.com/u/47723901?v=4"
         alt="experience hero image"
        />

        <div>
            <h4>Web Developer</h4>
            <p>MICROSOFT</p>
            <div>

            </div>
            <p>Started work ... Ended....</p>
            <ul>
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