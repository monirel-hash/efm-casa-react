import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajoutePay, moddifierPopulation } from '../store/paysSlice';

const Ajouter = () => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState('');
  const [population, setPopulation] = useState('');
  const [indpyear, setIndpyear] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddCountry = (e) => {
    e.preventDefault();
    const newCountry = {
      name: countryName,
      population: Number(population),
      imageUrl: imageUrl,
      indepYear: Number(indpyear),
    };
    dispatch(ajoutePay(newCountry));
    setCountryName('');
    setPopulation('');
    setImageUrl('');
    setIndpyear('');
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
      <div className="mb-3">
        <label htmlFor="indpyear" className="form-label">Independent Year:</label>
        <input
          type="text"
          id="indpyear"
          className="form-control"
          value={indpyear}
          onChange={(e) => setIndpyear(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">Flag image URL:</label>
        <input
          type="text"
          id="imageUrl"
          className="form-control"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleAddCountry}>Add country</button>
      </div>
    </form>
  );
};

export default Ajouter;
