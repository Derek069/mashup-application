import React from 'react';
import { useState, useEffect } from 'react';
import  axios from 'axios';
import '../styles/stylesMarvel.css'
import { Link } from "react-router-dom";


//https://gateway.marvel.com:443/v1/public/characters?apikey=84c9afc670217a09f2566ca3189177f9

//key publica: 84c9afc670217a09f2566ca3189177f9
//key privada: 9a4f1874e8f4c201b8895f1aaf372fdf3fa614a1
//ts: 1

//19a4f1874e8f4c201b8895f1aaf372fdf3fa614a184c9afc670217a09f2566ca3189177f9

//hash: 273ddb932eb9647e18e21c589d55f000

//example url :https://gateway.marvel.com:443/v1/public/characters?series=19&ts=1&apikey=84c9afc670217a09f2566ca3189177f9&hash=273ddb932eb9647e18e21c589d55f000



function Comics() {

  const [characters, setCharacters]=useState([])


  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&startYear=2018&ts=1&apikey=84c9afc670217a09f2566ca3189177f9&hash=273ddb932eb9647e18e21c589d55f000').then(res=>{
        setCharacters(res.data.data.results)
 

        
    }).catch(error=>console.log(error))
    

  },[])

  console.log(characters)
  return (
    <React.Fragment>
      <div className='App'>
      <div className='header'> 
        
        <img className='logoMarvel'src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png'></img>
        
      </div>
      <div className='students'>
            Derek Alvarado, Alex Barraza, Omar Ramos, Luis Hernández, Salvador Perez and Luis Villa
      </div>
      <Link  to = {`/series`}>
              <h3 className='seriesbutton'>Click here to see other series...</h3>
        </Link>
      
      <div  className='App_Header'>
      </div>
        <div className='Characters_data'>
          { characters.map( per=>(

            <div className="Character__container">
                <img
                    className="Character__image" alt=''
                    src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                />
            <div className="Character__data">
                <h2 className="Character__name">{per.title}</h2>
            </div>
        </div>

          ))}
  

        </div>
    </div>
    </React.Fragment>
  );
}

export default Comics; 