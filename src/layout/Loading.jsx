import React from 'react'
import loading from '../assets/img/loading.gif'
export default function Loading() {
  return (
    <div id='loading' className='fixed top-0 right-0 z-50 w-screen h-screen' style={{backgroundColor: 'rgb(241 242 243)'}}>
      <img className='m-auto mt-48' src={loading} alt="" />
    </div>
  )
}
 