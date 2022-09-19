import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 
         className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img
         initial={{
            x: -200,
            opacity: 0.
         }}
         transition={{
            duration: 1.2,
         }}
         whileInView={{
            x: 0,
            opacity: 1
         }}
         viewport={{once: true}}
         src="https://avatars.githubusercontent.com/u/47723901?v=4"
         className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Let me <span className="underline decoration-[#F7AB0A]/50">introduce</span> myself</h4>
            <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque eum rem molestiae expedita necessitatibus aut. 
                Deleniti, odio dolorum ea perferendis rem praesentium commodi ab nostrum nobis quos pariatur placeat. Lorem, ipsum 
                dolor sit amet consectetur adipisicing elit. Mollitia dolore amet, in, laboriosam aspernatur blanditiis omnis esse nisi 
                nulla eius perferendis est accusamus temporibus voluptas atque aut vitae doloremque maiores? Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Cumque at molestias nam culpa quisquam autem assumenda officiis, minus tempore aspernatur 
                dolore suscipit iusto repudiandae repellendus! Fugiat minima numquam quibusdam fugit. Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Rerum vel dolorum et dolor odio similique! Quo iste ratione officiis fugiat unde impedit nulla excepturi illum? 
                Rerum possimus dolores vel alias.
            </p>
        </div>
    </motion.div>
  )
}