import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SideBar = () => {


  const pays = useSelector(state => state.pays)

  // Extract indepYear properties and add them to a set to remove duplicates
  const uniqueIndepYears = new Set(pays?.map(pay => pay.indepYear))

  // Convert set back to an array and sort by indepYear
  const sortedIndepYears = [...uniqueIndepYears].sort()
  

  console.log(sortedIndepYears)

  return (
    <div>
      <ul className='sidebar'>
        {sortedIndepYears.map(year => (
          <li key={year}>
            <Link to={`/pays/${year}`}>{year}</Link>
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default SideBar
