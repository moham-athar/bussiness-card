import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'

function Footer() {
  return (
    <div className='foot--'>
     <div className='icons'>
      <a href='https://github.com/moham-athar' target="_blank">
      <BsGithub size="35px" />
      </a>
      <a href='https://www.facebook.com/mohammed.athar.585112' target="_blank">
      <FaFacebookSquare size="35px" />
      </a>
      <a href='https://www.instagram.com/moham.atharr/' target="_blank">
      <BsInstagram size="35px" />
      </a>
      <a href='https://twitter.com/mohammed_a_thar' target="_blank">
      <IoLogoTwitter size="35px" />
      </a>
     </div>
    </div>
  )
}

export default Footer