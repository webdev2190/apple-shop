import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='container'>
            <div className='contents'>
                <p className='summer'>SUMMER 2020</p>
                <h1 className='heading'>NEW COLLECTION</h1>
                <p className='para1'>We know how large objects will act,</p>
                <p className='para2'>but things on a small scale.</p>
                <button className ='btn1'>SHOP NOW</button>
            </div>
            <div className='image'>
                <img src='none.png' alt ='not Found' />
            </div>
        </div>
    </div>
  )
}

export default Banner