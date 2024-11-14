import React from 'react';

// Sample data for farmers
const farmers = [
  {
    id: 1,
    imgSrc: 'images/farmer-5.jpg',
    name: 'Almas Parveen',
    role: 'Farmer Trainer | 3 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 2,
    imgSrc: 'images/farmer-1.jpg',
    name: 'Haji Muhammad',
    role: 'Traditional Palm-Date Farming | 30 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 3,
    imgSrc: 'images/farmer-4.jpg',
    name: 'Muhammad Iqbal',
    role: 'Cotton Farming | 20 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
  {
    id: 4,
    imgSrc: 'images/farmer-3.jpg',
    name: 'Nadeem Akhtar',
    role: 'Agriculture Entrepreneurship | 8 Year Experience',
    social: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
  },
];

const Farmer = () => {
  return (
    <section className="top" id="top">
      <div className="conc">
        <h1 className="heading">
          our <span> Farmers</span>
        </h1>
      </div>

      <div className="wrap">
        {farmers.map((farmer) => (
          <div className="container" key={farmer.id}>
            <div className="img-wrapper">
              <img src={farmer.imgSrc} alt={farmer.name} />
            </div>
            <div className="details">
              <h3>{farmer.name}</h3>
              <h5>{farmer.role}</h5>
              <div className="social-icons">
                {farmer.social.map((icon, index) => (
                  <i key={index} className={`fa ${icon}`}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Farmer;

// import React, { useState, useEffect } from 'react';

// // Sample API URL (replace with your actual API endpoint)
// const API_URL = 'http://localhost:5000/api/farmers';

// const Farmer = () => {
//   const [farmers, setFarmers] = useState([]); // State to store farmers data
//   const [loading, setLoading] = useState(true); // State to handle loading state
//   const [error, setError] = useState(null); // State to handle any errors during fetch

//   // Fetch farmers data when the component mounts
//   useEffect(() => {
//     const fetchFarmers = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch farmers');
//         }
//         const data = await response.json();
//         setFarmers(data); // Set the fetched farmers data
//         setLoading(false); // Set loading to false
//       } catch (error) {
//         setError(error.message); // Set the error message
//         setLoading(false); // Set loading to false if error occurs
//       }
//     };

//     fetchFarmers();
//   }, []); // Empty dependency array to run once on mount

//   // Render loading or error states
//   if (loading) {
//     return <p>Loading farmers...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <section className="top" id="top">
//       <div className="conc">
//         <h1 className="heading">
//           Our <span>Farmers</span>
//         </h1>
//       </div>

//       <div className="wrap">
//         {farmers.map((farmer) => (
//           <div className="container" key={farmer.id}>
//             <div className="img-wrapper">
//               <img src={farmer.imgSrc} alt={farmer.name} />
//             </div>
//             <div className="details">
//               <h3>{farmer.name}</h3>
//               <h5>{farmer.role}</h5>
//               <div className="social-icons">
//                 {farmer.social.map((icon, index) => (
//                   <i key={index} className={`fa ${icon}`}></i>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Farmer;
