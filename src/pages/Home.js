import React, { useEffect } from 'react'
import Fotoku from '../assets/fotoku.svg'
import { TypeAnimation } from 'react-type-animation';
import GithubLogo from '../assets/github.svg'
import YoutubeLogo from '../assets/youtube.svg'
import LinkedinLogo from '../assets/linkedin.svg'
import InstagramLogo from '../assets/instagram.svg'
import { motion } from "framer-motion";
import { fadeIn } from '../components/fadeIn';

function Home() {

  useEffect(() => {
    document.body.style.backgroundColor ="#000000"
  })
  return (
    <div id='home' className='section text-white min-h-[85vh] lg:min-h-[78vh] justify-center '>
      <div className='flex items-center justify-center lg:justify-center w-full'>
        <div className='lg:mr-40'>
          <motion.p 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className='text-xl font-bold leading-[0.8] text-center lg:text-left lg:text-3xl'>Muhammad Bastian Hanafi</motion.p>
          <motion.div
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className='flex items-center justify-center lg:justify-start lg:mt-5'>
            <span className='text-[35px] lg:text-4xl text-center lg:text-right mr-4'>I'm</span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'FRONTEND',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'BACKEND',
                2000,
                'DEVOPS',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '35px', display: 'inline-block', color:"#E0D300" }}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('up', 0.3)}
            viewport={{once: false, amount: 0.7 }}
          >
            <p className='text-center lg:text-2xl lg:text-left lg:mt-4 lg:font-bold'>#Learning by doing</p>
            <p className='max-w-md text-center lg:text-left'>I'm DevOps engineer and ungraduate informathics student on Amikom Yogyakarta University I like to explore something new, my main role is devops, but i also learn frontend and backend.</p>
          </motion.div>
          <div className='flex container mx-auto items-center justify-center mt-10 lg:justify-start'>
            <motion.div 
              initial={{ opacity: 0.1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.5 }}
              whileInView={{ opacity: 1 }}
              className='bg-[#00A5E0] px-3 py-2 rounded-full mr-10 lg:px-6 lg:py-3'>
              <p className='font-bold lg:text-2xl'>CONTACT ME</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0.1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.5 }}
              whileInView={{ opacity: 1 }}
              className='justify-center items-center'>
              <p className='lg:text-2xl'>My Protofolio</p>
            </motion.div>
          </div>
          <motion.div 
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('right', 0.3)}
            viewport={{once: false, amount: 0.7 }}
            className='flex items-center justify-center mt-5 lg:justify-start lg:mt-10'>
            <a href='https://www.youtube.com/bt66Channel' target='_blank' className='group'>
              <img src={YoutubeLogo} alt='youtube_logo' className='w-10 lg:w-14 mx-2 lg:mx-6 group-hover:scale-125 transition'></img>
            </a>
            <a href='https://github.com/bt66' target='_blank' className='group'>
              <img src={GithubLogo} alt='github logo' className='w-10 lg:w-14 mx-2 lg:mx-6 group-hover:scale-125 transition'></img>
            </a>
            <a href='https://www.linkedin.com/in/muhammad-bastian-hanafi-a95669243' target='_blank' className='group'>
              <img src={LinkedinLogo} alt='linkedin logo' className='w-10 lg:w-14 mx-2 lg:mx-6 group-hover:scale-125 transition'></img>
            </a>
            <a href='https://www.instagram.com/bt66tech' target='_blank' className='group'>
              <img src={InstagramLogo} alt='instagram logo' className='w-10 lg:w-14 mx-2 lg:mx-6 group-hover:scale-125 transition'></img>
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial='hidden'
          whileInView={'show'}
          variants={fadeIn('left', 0.3)}
          viewport={{once: false, amount: 0.7 }}
          className='hidden lg:flex'>
          <img src={Fotoku} alt='fotoku' className='max-w-xl'></img>
        </motion.div>
      </div>
    </div>
  )
}

export default Home