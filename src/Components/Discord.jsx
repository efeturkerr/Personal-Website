import React from 'react'
import { GoPrimitiveDot } from "react-icons/go"

const reduce = {
  "dnd"     : "danger",
  "idle"    : "warning",
  "online"  : "success",
  "offline" : "secondary"
}

export default function Discord({discord}) {
  const {activities, discord_user, discord_status} = discord
  var vscActivity = activities.find(activity => activity.name === "Visual Studio Code");

  return (
      <div className={`d-inline gap-3 border border-2 border-${reduce[discord_status]} p-3 rounded-3 d-flex flex-column`}>
        <div className="profile d-flex flex-row align-items-center gap-4">
          <img src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}`} className="rounded-3" style={{width:"60px"}} alt="" />
          <div className='d-flex align-items-center justify-content-center'>
            <span>{discord_user.username}#{discord_user.discriminator}</span>
          </div>  
          <span className='ms-auto me-3'><GoPrimitiveDot className={`text-${reduce[discord_status]}`}/></span>
        </div>
        {
          vscActivity &&
          <div className={`profile d-flex flex-row align-items-center pt-3 border-top border-2 border-${reduce[discord_status]} gap-4`}>
            <img src={vscActivity.assets.large_image.split("/").slice(2).join("/").replace("/", "://")} className="rounded-3" style={{width:"60px"}} alt="" />
            <div className='d-flex flex-column justify-content-center'>
              <span className='fw-bold'>{vscActivity.name}</span>
              <span>{vscActivity.details}</span>
              <span>{vscActivity.state}</span>
            </div>
          </div>
        }
        {
          discord.listening_to_spotify &&
          <div className={`profile d-flex flex-row align-items-center pt-3 border-top border-2 border-${reduce[discord_status]} gap-4`}>
            <img src={discord.spotify.album_art_url} className="rounded-3" style={{width:"60px"}} alt="" />
            <div className='d-flex flex-column justify-content-center'>
              <span className='fw-bold'>Spotify</span>
              <span>{discord.spotify.song}</span>
              <span><span className='fw-bold'>By</span> {discord.spotify.artist}</span>
              <span><span className='fw-bold'>On</span> {discord.spotify.album}</span>
            </div>
          </div>
        }
        </div>
  )
}
