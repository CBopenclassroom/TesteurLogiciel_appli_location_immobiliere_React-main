import { useParams } from 'react-router';
import './housing.css'
import Carousel from '../../components/Carousel/Carousel'
import React, { useState, useEffect } from 'react';
import Collapse from '../../components/Collapse/Collapse';
import Ratings from '../../components/Ratings/Ratings';



function Housing() {

  const { id } = useParams()

  const [property, setProperty] = useState(null)
  const [propertypictures, setPictures] = useState([])

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await fetch('http://localhost:8080/api/properties/' + id);
      const data = await response.json();
      setProperty(data)
      setPictures(data.pictures)
      console.log(data)
    };


    fetchProperty();



  }, []);

  if (!property) {
    console.log(property)
    return (<p> Chargement en cours </p>)
  }

  const fullName = property.host?.name.split(" ");


  return (
    <main>
      <Carousel pictures={property.pictures} />
      <div className='property-infos-container'>

        <div className='essentials'>
          <div className='title-tags'>
            <div className='title'>
              <h2>{property.title}</h2>
              <p>{property.location}</p>
            </div>

            <div className='tags'>
              {property.tags?.map(tag =>
                <span key={tag}>{tag}</span>
              )}
            </div>

          </div>

          <div className='rating-host'>
            <div className='host'>
              <p>{fullName[0]}<br/>{fullName[1]}</p>
              <img src={property.host?.picture} alt={property.host?.name}></img>
            </div>

            <div className='rating'>
              <Ratings rating={property.rating} />

            </div>
          </div>
        </div>

        <div className='info-buttons'>
          <Collapse title={"Description"} text={property.description} />
          <Collapse title={"Équipements"} text={property.equipments} />

        </div>

      </div>
    </main>
  )
}

export default Housing
