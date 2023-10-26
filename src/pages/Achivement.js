import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../components/fadeIn';
import CcnaLogo from '../assets/ccna_1.png'
import IteLogo from '../assets/ITE.png'

function Achivement() {
  return (
    <div className='section text-white min-h-[85vh] lg:min-h-[78vh] p-11 justify-center dark' id='achivement'>

      <div className='flex flex-col items-center justify-center'>
        <div>
          <motion.h1 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white text-center">Achivement & Certification</motion.h1>
        </div>
        <motion.div 
          initial='hidden'
          whileInView={'show'}
          variants={fadeIn('up', 0.3)}
          viewport={{once: false, amount: 0.7 }}
          className=''>
          <a href="https://www.credly.com/earner/earned/badge/57abb1a6-e32d-411e-aab3-aa71d956cada" target='_blank' className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-10 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={CcnaLogo} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CCNA 1</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources.</p>

              </div>
          </a>
          <a href="https://www.credly.com/earner/earned/badge/19e275c5-811a-4495-8a38-ec45e355df52" target='_blank' className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-3">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={IteLogo} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IT Essentials</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Foundation knowledge in computer hardware and software, as well as operating systems, networking concepts, mobile devices, troubleshooting and responsibilities of an IT professional.</p>

              </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Achivement