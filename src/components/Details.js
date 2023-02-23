import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [pay, setPay] = useState(null);
  const { code } = useParams();
  console.log(code)
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {

    const loadMovie = async () => {
      const res = await fetch(`http://localhost:5000/pays?code=${code}`);
      const data = await res.json();
      setPay(data[0]);
    };
    loadMovie();
  },[])

  if (!pay) {
    return <h1>Loading ....</h1>;
  }

  // Sort cities by name
  const sortedCities = pay.cities.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>{pay.name}</h1>
          <img src={pay.imageUrl} alt={pay.imageUrl} className="img-thumbnail" style={{height:400 ,margin: 0 }}/>
          <p><strong>Continent:</strong> {pay.continent}</p>
          <p><strong>Surface Area:</strong> {pay.surfaceArea}</p>
          <p><strong>Independence Year:</strong> {pay.indepYear}</p>
        </div>
        <div className="col-md-4">
          <h2>Cities:</h2>
          <ul className="list-group">
            {//sort the cities and display
            sortedCities.map(city => (
              <li key={city.name} className="list-group-item">{city.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Details;
