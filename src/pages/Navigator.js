import React from 'react'
import AchivementLogo from '../assets/achivement.svg'
import HomeLogo from '../assets/home.svg'
import WorkLogo from '../assets/work.svg'
import TimelineLogo from '../assets/timeline.svg'
import { Link } from "react-scroll";

function Navigator() {
  return (
    <div className='p-2 fixed bottom-2 -translate-x-[50%] left-[50%]'>
      <div className='bg-[#757474] opacity-40 flex rounded-xl justify-around p-2 w-screen max-w-[350px]'>
        <Link activeClass='active' smooth={true} spy={true} to='home'>
          <img src={HomeLogo} alt='homeIcon' className='w-10 fill-white'></img>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to="work">
          <img src={WorkLogo} alt='workIcon' className='w-10 fill-white'></img>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='skill'>
          <img src={TimelineLogo} alt='timelineIcon' className='w-10 fill-white'></img>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='achivement'>
          <img src={AchivementLogo} alt='achivementIcon' className='w-10 fill-white'></img>
        </Link>
      </div>
    </div>
  )
}

export default Navigator