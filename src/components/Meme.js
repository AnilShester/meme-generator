import React from 'react'
import memesData from '../memesData'

export default function Meme() {
  function handleClick() {
    const random = Math.floor(Math.random() * memesData.data.memes.length)
    console.log(memesData.data.memes[random].url)
  }
  return (
    <div className="meme-container">
      <div className="form">
        <input type="text" className="form-input" placeholder="top text" />
        <input type="text" className="form-input" placeholder="bottom text" />
        <button className="form-btn" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
    </div>
  )
}
