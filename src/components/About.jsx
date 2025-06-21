import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-16">
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative z-10 max-w-3xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-purple-600 mb-4 text-center">About Me</h2>

          <motion.h3
            className="text-2xl font-medium text-gray-800 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm Lakshmipathi Pathagunta
          </motion.h3>

          <TypeAnimation
            sequence={[
              'AIML Engineer', 2000,
              'Full Stack Web Developer', 2000,
              'Software Engineer', 2000,
              'MERN Stack Developer', 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="h4"
            className="text-xl font-semibold text-purple-500 mb-6 text-center"
          />

          <motion.p
            className="text-gray-700 mb-6 text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            My passion for technology started early, driven by the endless possibilities it offers to improve and innovate. Over time, I've developed a strong proficiency in multiple programming languages and frameworks, allowing me to create efficient and scalable solutions.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I thrive on learning new technologies and tackling complex projects. Outside of my coding endeavors, I enjoy traveling to new destinations, immersing myself in books, and keeping abreast of the latest developments in the tech world.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="#projects" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 shadow-md">
              View My Projects
            </a>
            <a href="#contact" className="bg-transparent text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition duration-300 shadow-md">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
