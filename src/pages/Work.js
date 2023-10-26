import React from 'react'
import WorkIllustrator from '../assets/work-illustrator.svg'
import { motion } from "framer-motion";
import { fadeIn } from '../components/fadeIn';

function Work() {
  return (
    <div className='section text-white min-h-[85vh] lg:min-h-[78vh] p-11 justify-center' id='work'>
      <div className='flex items-center flex-col justify-center w-full h-full'>
        <div>
          <motion.h1 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white text-center">My Experience</motion.h1>
        </div>
        <div className='lg:flex lg:w-full lg:items-center lg:justify-around mt-16 lg:mt-24 w-full'>
          <motion.img 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('down', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            src={WorkIllustrator} alt='work image' className='max-w-2xl hidden lg:flex'></motion.img>

          <motion.div 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className='flex items-center justify-center'>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">December 2020 - Now</time>
                    <h3 className="text-lg font-semibold text-white-900 dark:text-white">DevOps Enginer at PT. Carakan Sadhana Dhirgantara</h3>
                    <p className="text-base font-normal text-white-500 lg:max-w-lg dark:text-white-400">I'am DevOps Engineer at PT Carakan Sadhana Dhirgantara, my job is maintain service to ensure that service is running, make automation deployment, and do research & development.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">2020 - now</time>
                    <h3 className="text-lg font-semibold text-white-900 dark:text-white">Informathics in Amikom Yogyakarta University</h3>
                    <p className="mb-4 text-base font-normal text-white-500 lg:max-w-lg dark:text-white-400">Currently im ungraduate student from Informathics on Amikom Yogyakarta University.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-white-400 dark:text-white-500">April 2023 - July 2023</time>
                    <h3 className="text-lg font-semibold text-white-900 dark:text-white">Asistant Lecturer</h3>
                    <p className="text-base font-normal text-white-500 lg:max-w-lg dark:text-white-400">Even been asistant lecturer big data and predictive analytics course in Amikom Yogyakarta University.</p>
                </li>
            </ol>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Work