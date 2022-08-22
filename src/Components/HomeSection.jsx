import React, { useEffect, useState } from 'react'
import axios from "axios"
import Discord from "./Discord";
import { FaPython, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { BsBootstrapFill } from "react-icons/bs"
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTypescript, SiVisualstudiocode, SiApollographql, SiTailwindcss, SiNestjs } from "react-icons/si"

export default function HomeSection() {
  const [discord, setDiscord] = useState(null)

  useEffect(() => {
      const getDiscord =  () => {
        axios.get("https://api.lanyard.rest/v1/users/790893297336975362").then(({data}) => setDiscord(data.data))
        setInterval(() => axios.get("https://api.lanyard.rest/v1/users/790893297336975362").then(({data}) => setDiscord(data.data)), 30000)
      }

      !discord && getDiscord()
      
  }, [discord])

  return (
    <div className='d-flex align-items-center flex-column mb-5 gap-5'>
      <div className='d-flex flex-column align-items-center text-center' style={{maxWidth:"450px"}}>
        <h1 className='fw-bold'>Hello, I am Efe Türker👋</h1>
        <p>I am {new Date().getFullYear()-2007} years old developer. I develop websites backend and frontend. My goal is to be fullstack developer 🎯</p>
      </div>
      <div className="text-center py-3 d-flex flex-column justify-content-center align-items-center" style={{width:"fit-content"}}>
        <h1 className='fw-bold'>Technologies 💻</h1>
        <div className='row col-12 col-md-7'>
          <div className='row row-cols-3 row-cols-md-4 px-md-5 g-0'>
            <span className='col mb-2'><FaPython className='fs-4'/> Python</span>
            <span className='col mb-2'><SiJavascript/> Javascript</span>
            <span className='col mb-2'><SiTypescript className='fs-4'/> Typescript</span>
            <span className='col mb-2'><FaNodeJs className='fs-4'/> Node.js</span>
            <span className='col mb-2'><SiExpress className='fs-4'/> Express.js</span>
            <span className='col mb-2'><SiNestjs className='fs-4'/> NestJS</span>
            <span className='col mb-2'><FaReact className='fs-4'/> React.js</span>
            <span className='col mb-2'><GrGraphQl className='fs-4'/> Graphql</span>
            <span className='col mb-2'><SiApollographql className='fs-4'/> Apollo Graphql</span>
            <span className='col mb-2'><SiMongodb className='fs-4'/> Mongo</span>
            <span className='col mb-2'><SiMysql className='fs-4'/> Mysql</span>
            <span className='col mb-2'><BsBootstrapFill className='fs-4'/> Bootstrap 5</span>
            <span className='col mb-2'><SiTailwindcss className='fs-4'/> Tailwind</span>
            <span className='col mb-2'><FaGitAlt className='fs-4'/> Git</span>
            <span className='col mb-2'><SiVisualstudiocode className='fs-4'/> VSCode</span>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
          <h1 className='fw-bold'>Discord 🤠</h1>
          <div className='d-flex flex-row' style={{}}>
            {discord && <Discord discord = {discord}/>} 
          </div>
        </div>
    </div>
  )
}
