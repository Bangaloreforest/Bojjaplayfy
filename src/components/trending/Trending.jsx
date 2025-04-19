import React from 'react'
import './trending.css';
import Trendingcard from '../trendingCard/Trendingcard' 

const Trending = () => {
  return (
    <div className ='trendingSectionMainContainer'>
      <span>
      Tollywood Trending Albums
      </span>
      
      <Trendingcard/>
    </div>
  )
}

export default Trending