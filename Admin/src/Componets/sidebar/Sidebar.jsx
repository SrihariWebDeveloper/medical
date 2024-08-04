import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sidebar/Sidebar.css'
import Add from '../../assets/add_icon.png'
import List from '../../assets/order_icon.png'

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <div className="side-bar-list">
        <NavLink to={'/add'} className="list-one">
          <img src={Add} alt="" />
          <p>Add Iteams</p>
        </NavLink>
        <NavLink to={'/list'} className="list-one">
          <img src={List} alt="" />
          <p>List Iteams</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
