import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'


export default function AboutPage() {
  return (
    <Card>   
        <div className='about'>
            <h1> About the App</h1>
            <p>This is an app to leave feedback for a product or service </p>
            <p>Version: 1.0.1</p>
        <p>
            <Link to='/'>Back to Home</Link>
        </p>
        </div>
    </Card>
 
  )
}

