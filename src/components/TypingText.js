import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

function TypingText() {
  return (
      <ReactTypingEffect
        className='text-[#E0D300]'
        text={["FRONTEND.", "BACKEND.", "DEVOPS."]}
      />
  )
}

export default TypingText