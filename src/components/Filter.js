import React from 'react'
import { filter } from '../store/paysSlice'
import { useState } from 'react';
import { useDispatch } from 'react-redux'



const Filter = () => {

  const dispatch  = useDispatch()

  const [selectedOption, setSelectedOption] = useState('');

  const handleFilter = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'population') {
      dispatch(filter({ type: 'FILTER_BY_POPULATION' }));
    } else if (selectedOption === 'continent') {
      dispatch(filter({ type: 'FILTER_BY_CONTINENT' }));
    }
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleFilter}>
        <option value="">Sort By option</option>
        <option value="population">Sort By Population</option>
        <option value="continent">Sort By Continent</option>
      </select>
    </>
  );
}

export default Filter