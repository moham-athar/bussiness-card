import React from 'react'
import Deslogo from './images/IMG20220504194258.jpg'
function About() {
  return (
    <div className='info--det'>
        <img src ={Deslogo} alt = "logo"/>
        <div className='abt-cont'>
            <h2>Mohammed Athar</h2>
            <h4>Developer</h4>
            <button>
                <link rel="stylesheet" href="mohammed_a_thar@outlook.com" />
                Email
            </button>
        </div>
    </div>
  )
}

export default About