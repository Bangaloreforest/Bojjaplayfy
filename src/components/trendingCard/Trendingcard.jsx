import React from 'react'
import './trendingcard.css'
import { TrendingCardData } from '../../config/confige'


const Trendingcard = () => {

  return (
    <>
        <div className='trendingCardMainCointainer'>
      {
       TrendingCardData.map((ele) => {
          return (
           <>
           <div className='CardMainCointainer'>
            <img src={ele.imgSrc} alt=""/>
            <div className="CardTextCointainer">
            <h2>{ele.heading}</h2>
            <p>{ele.subHeading}</p>
            </div>
           
            </div>
          </>
          )
        })
      }

        </div>
    </>
   
  )
}

export default Trendingcard