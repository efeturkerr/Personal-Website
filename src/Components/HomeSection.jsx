import React, { useEffect, useState } from 'react'
import axios from "axios"
import Discord from "./Discord";
import { FaPython, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTypescript, SiVisualstudiocode, SiNestjs } from "react-icons/si"

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
      <div style={{maxWidth:"450px"}} className="text-center p-3">
        <h1 className='fw-bold'>Technologies 💻</h1>
        <div className='row row-cols-3'>
          <span className='col mb-2'><FaPython className='fs-5'/> Python</span>
          <span className='col'><SiJavascript/> Javascript</span>
          <span className='col mb-2'><SiTypescript className='fs-5'/> Typescript</span>
          <span className='col'><FaNodeJs className='fs-5'/> Node.js</span>
          <span className='col'><SiExpress className='fs-5'/> Express.js</span>
          <span className='col'><SiNestjs className='fs-5'/> NestJS</span>
          <span className='col'><FaReact className='fs-5'/> React.js</span>
          <span className='col mb-2'><GrGraphQl className='fs-5'/> Graphql</span>
          <span className='col mb-2'><SiMongodb className='fs-5'/> Mongo</span>
          <span className='col'><SiMysql className='fs-4'/> Mysql</span>
          <span className='col'><FaGitAlt className='fs-5'/> Git</span>
          <span className='col mb-2'><SiVisualstudiocode className='fs-5'/> VSCode</span>
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
