import React, { useState } from 'react'
import { searchPays } from '../store/paysSlice';

import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue]= useState('');

    const handleSearch = () => {
        dispatch(searchPays(searchValue));
    }

  return (
    <>
      <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default Search
