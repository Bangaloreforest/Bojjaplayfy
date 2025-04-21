import React from 'react'
import './trending.css';
import Trendingcard from '../trendingCard/Trendingcard' 

const Trending = ({setCurrentPage,setCurrentEle}) => {
  return (
    <div className ='trendingSectionMainContainer'>
      <span>
      Tollywood Trending Songs
      </span>
      
      <Trendingcard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
    </div>
  )
}

export default Trending