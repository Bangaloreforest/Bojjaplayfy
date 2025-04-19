import React from 'react'
import './mainsection.css';
import Trending from '../trending/Trending'
import Popularartist from '../popularartist/Popularartist'

const Mainsection = () => {
  return (
    <main className = "mainSectionContainer">
        <Trending/>
        <Popularartist/>
    </main>
    
    
  )
}

export default Mainsection