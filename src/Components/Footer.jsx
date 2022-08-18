import React from 'react'
import { FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-100 p-5 border-top border-1 border-secondary d-flex flex-column'>
      <span className='fs-2'>Efe Türker</span>
      <span className='text-secondary fs-5'>Software Developer</span>
      <div className='mt-2 d-flex gap-3' >
        {/*eslint-disable-next-line*/}
        <a href='https://www.instagram.com/efeturkerrr/' target={"_blank"}><FaInstagram className='fs-4 text-white'/></a>
        {/*eslint-disable-next-line*/}
        <a href='https://github.com/efeturkerr' target={"_blank"}><FaGithub className='fs-4 text-white'/></a>
        {/*eslint-disable-next-line*/}
        <a href='https://open.spotify.com/user/x7ysqyt66hp91dazp9mg593tk?si=fab6a8e41490432c' target={"_blank"}><FaSpotify className='fs-4 text-white'/></a>
      </div>
    </div>
  )
}
