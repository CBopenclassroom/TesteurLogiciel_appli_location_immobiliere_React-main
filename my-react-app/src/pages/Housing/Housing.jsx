import { useParams } from 'react-router';
import './housing.css'
import React, { useState, useEffect} from 'react';



function Housing() {

  const {id} = useParams()

  const [property, setProperty] = useState([])
  
    useEffect(() => {
      const fetchProperty = async () => {
        const response = await fetch('http://localhost:8080/api/properties/'+id);
        const data = await response.json();
        setProperty(data)
        console.log(data)
      };
  
  
      fetchProperty();
  
    }, []);

  return (
    <main>
        <p>je suis la page housing </p>
    </main>
  )
}

export default Housing
