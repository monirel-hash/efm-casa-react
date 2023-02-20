import React from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'

const Menu = () => {
  return (
    <div>
      <ul className='menu'>
      <Link to="/">Home</Link>
        <Link to="/ajouter">Ajouter</Link>
        <Link to="/modifier/1">Modifier</Link>
        <Filter />
      </ul>
    </div>
  )
}

export default Menu
