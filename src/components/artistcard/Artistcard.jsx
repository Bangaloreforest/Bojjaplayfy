import React from 'react'
import './artistcard.css'
import { artistList } from '../../config/confige'


const Artistcard = ({setCurrentPage}) => {

  return (
    <>
      <div className='artistCardMainCointainer'>
        {
        artistList.map((ele) => {
            return (
              <>
              <div onClick={()=>{
                setCurrentPage("aristSpecificPage")
                }} className='artistCardImgCointainer'>
                <img src={ele.imgSrc} alt=""/>
                <div className="artistCardTextCointainer">
                  <h2>{ele.name}</h2>
                  <p> Tollywood Actor </p> 
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

export default Artistcard



/*const Artistcard = () => {
  return (
    <div className='artistCardMainCointainer'>
      Artistcard
    </div>
  )
}*/

// export default Artistcard //
