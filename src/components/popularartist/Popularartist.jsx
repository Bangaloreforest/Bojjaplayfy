import React from 'react'
import './popularartist.css'
import Artistcard from '../artistcard/Artistcard'

const Popularartist = () => {
  return (
    <div className = 'popularArtistMainContainer'>
      <span>
      Popular Artist
      </span>
      
      <Artistcard/>
    </div>
  )
}

export default Popularartist