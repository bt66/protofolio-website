import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../components/fadeIn';

function Skills() {
  return (
    <motion.div 
      initial='hidden'
      whileInView={'show'}
      variants={fadeIn('up', 0.3)}
      viewport={{once: false, amount: 0.7 }}
      className='section text-white min-h-[85vh] lg:min-h-[78vh] p-11 justify-center dark' id='skill'>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Skills</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
            </div> 
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Frontend web developer</a></h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">I have experience to build static or dynamic website with react, tailwind, bootstrap, html, css, javascript.</p>
              </article> 
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Backend</a></h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">I have experience to build backend for website,usually i create backend with javascript or python, i familiar to build rest api with nodejs, flask or fastapi. I also have development experience with sql database like mysql, mariadb, postgresql, sqlite and nosql database like mongodb.</p>
              </article>   
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">DevOps</a></h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Familiar with container orchestrator like kubernetes, container, CI/CD , on premise Hypervisor like openstack and vmware, cloud hypervisor like GCP or AWS, .</p>
              </article>                    
            </div>  
          </div>
        </section>
    </motion.div>
  )
}

export default Skills