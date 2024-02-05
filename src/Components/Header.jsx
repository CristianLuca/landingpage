import pizza from '/src/pizza1.png';
import '/src/ComponentsCss/Fonts.css'
import React, { useState } from 'react';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    }
    const handlePopupClick = () => {
      setShowPopup(false);
  }
    return (
      
  <div className="bg-cover" style={{ backgroundImage: `url(${pizza}) `,backgroundPosition: '0 0', height:'45vw'}}>
    <h1 style = {{position: 'absolute', fontSize:'4vw', left: '35vw', top: '2vw', textAlign:'center', width: '30vw'}} className=' text-center text-white text-base frank-font'>IL CAPITANO'S</h1>
    <h1 style = {{position: 'absolute', fontSize:'3vw', left: '25vw', top: '5vw', textAlign:'center', width: '50vw'}} className='text-4xl text-center text-white text-base frank-font'>Wood Fired  Neapolitan Pizzeria</h1>
    <div >
          <h1 style={{position: 'absolute', left: '44.5vw', top: '9.4vw', textAlign:'center', width: '30vw', fontSize:'0.8vw'}} className=" text-white poppins-font">
            Family Run Pizzeria In The Heart of Waterloo, Liverpool. 
            Specialising In 24 hour Proven Dough Using The Traditional Methods From Napoli, Italy.
            Expect Disco Music And A Buzzing Atmosphere.
          </h1>
          
        </div>
        
  </div>
        
       
    
      
  
    )
  }