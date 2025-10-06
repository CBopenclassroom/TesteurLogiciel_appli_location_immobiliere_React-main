import Banner from '../../components/Banner/Banner'
import './home.css'
import bannerHome from "./../../assets/banner-home.png"
import { Link } from 'react-router'
import React, { useState, useEffect } from 'react';

function Home() {

  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('http://localhost:8080/api/properties');
      const data = await response.json();
      setProperties(data)
    };


    fetchProperties();

  }, []);







  return (
    <main>
      <Banner image={bannerHome} text={"Chez vous, partout et ailleurs"} />
      <div className="housings-container">
       <div className='housing-grid'>
         {properties.map(property=>
          <Link key={property.id} to={`/housing/${property.id}`}><figure>
            <img src={property.cover} alt={property.title}/>
            <p>{property.title}</p>
          </figure>
          </Link>
        )}
       </div>
      </div>
    </main>
  )
}

export default Home
