import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import SideBar from './SideBar'

const Home = () => {
  return (
    <>
        <Menu />
        <div className='d-flex gap-3'>
          <SideBar />
          <Outlet />
        </div>
    </>
  )
}

export default Home
