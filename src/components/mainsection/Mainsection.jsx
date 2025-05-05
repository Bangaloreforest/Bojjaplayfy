import React, { useState } from 'react'
import './mainsection.css';
import Trending from '../trending/Trending'

import SpecificMusicfile from '../../pages/specificMusicPage/SpecificMusicfile'

const Mainsection = () => {
  const [currentPage, setCurrentPage] = useState ("home")
  const [currentEle, setCurrentEle] = useState(null)
  return (
    <main className = "mainSectionContainer">
      {
        currentPage === "home" ? 
        <>
          <Trending setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
          
        </> : currentPage === "musicSpecificPage" ? 
        <>
        <SpecificMusicfile currentEle={currentEle}/>
        </> : 
        currentPage === "aristSpecificPage" ? 
          <>artist</> : 
          null
      }  
    </main>
    
    
  )
}

export default Mainsection