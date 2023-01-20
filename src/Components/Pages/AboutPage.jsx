import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>

        <div className='about'>
            <h1>Hello</h1>
            <p>My name is Erfan Nasseri and i`m a web developer and Graphic designer</p>
            <p>this is a react app to leave feedback</p>
            <Link to={'/Feedback-UI'}> Go Back </Link>            
        </div>
    
    </Card>
  )
}

export default AboutPage