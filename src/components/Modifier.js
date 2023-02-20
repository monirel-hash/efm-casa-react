import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  moddifierPopulation } from '../store/paysSlice';

const Modifier = () => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState('');


  const pays = useSelector(state=>state.pays)


  const handleUpdatePopulation = (e) => {
    e.preventDefault();
    const pay = pays.find((pay) => pay.name === countryName);
    if (pay) {
      const updatedCountry = {
        name: countryName,
        population: Number(population),
      };
      dispatch(moddifierPopulation(updatedCountry));
      setCountryName('');
      setPopulation('');
    }
  };

  return (
    <form className="border p-3 mb-3">
      <h3>Add or update country</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Country name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="population" className="form-label">Population:</label>
        <input
          type="text"
          id="population"
          className="form-control"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handleUpdatePopulation}>Update population</button>
      </div>
    </form>
  );
};

export default Modifier;

