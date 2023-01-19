import React from 'react'
import {FaQuestionCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AboutIcon() {
  return (
    <div className='about-link'>
        <Link to={'/about'}> <FaQuestionCircle size={30}/> </Link>
    </div>
  )
}

export default AboutIcon