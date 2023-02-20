import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Pays = () => {
  const pays = useSelector(state => state.pays)
  const { id } = useParams()

  let content = [...pays]

  console.log(content)

  if (id) {
    content = pays.filter(pay => pay.indepYear == id) 
  }

  return (
    <div className='container d-flex gap-3 justify-content-center my-3 flex-wrap'>
      {content.map((pay, index) => (
        <div className='card' style={{ width: '18rem' }} key={index}>
          <img src={pay.imageUrl} height='200px' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{pay.name}</h5>
            <p className='card-text'>Population: {pay.population}</p>
            <Link to={`/pays/${pay.code}`} className='btn btn-primary'>
              See details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pays







// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";

// const Pays = () => {
//   const pays = useSelector((state) => state.pays);
//   const { id = "" } = useParams();
//   const content = id ? pays.filter((pay) => pay.indepYear === id) : pays;

//   return (
//     <div className="container d-flex gap-3 justify-content-center my-3 flex-wrap">
//       {content.map((pay) => (
//         <div
//           className="card"
//           style={{ width: "18rem" }}
//           key={pay.code || pay.name}
//         >
//           <img
//             src={pay.imageUrl}
//             height="200px"
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{pay.name}</h5>
//             <p className="card-text">Population : {pay.population}</p>
//             <Link to={`/pays/${pay.code}`} className="btn btn-primary">
//               See details
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Pays;
