import React from 'react'

const SpecificMusicfile = ({currentEle}) => {
  return (
    <div>
        <img src = {currentEle.imgSrc} alt="" />
        <h2>{currentEle.heading}</h2>
        <p>{currentEle.subHeading}</p>
        <audio src={currentEle.musicFile} autoPlay controls></audio>
    </div>
  )
}

export default SpecificMusicfile