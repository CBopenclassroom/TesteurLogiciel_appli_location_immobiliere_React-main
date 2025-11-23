import Banner from '../../components/Banner/Banner'
import './home.css'
import bannerHome from "./../../assets/banner-home.png"
import { Link } from 'react-router'
import React, { useState, useEffect } from 'react';

function Home() {

  const [properties, setProperties] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/properties');
        if (!response.ok) {
          throw new Error("erreur lors de la récupération des propriétés")
        }
        const data = await response.json();
        setProperties(data)
      } catch (error) {
        console.log(error)
        setError(error)
      }

    };


    fetchProperties();

  }, []);



  if (error) {
    return (<p>{error}</p>)
  }




  return (
    <main>
      <Banner image={bannerHome} text={"Chez vous, partout et ailleurs"} />
      <div className="housings-container">
        <div className='housing-grid'>
          {properties.map(property =>
            <Link key={property.id} to={`/housing/${property.id}`}><figure>
              <img src={property.cover} alt={property.title} />
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
