import React from 'react'
import Navbar from '../Home/Navbar'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <>
          <Navbar/>
    <div className='container'>
    <Outlet>
      
    </Outlet>
    </div>
    </>
  )
}
