import React from 'react'
import './popularartist.css'
import Artistcard from '../artistcard/Artistcard'

const Popularartist = ({setCurrentPage}) => {
  return (
    <div className = 'popularArtistMainContainer'>
      <span>
      Popular Artist
      </span>
      
      <Artistcard setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Popularartist