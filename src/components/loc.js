import React, { useEffect, useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });


  const [area, setArea] = useState({
    state: "",
    city: "",
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    
    
    
    
    
    
    // end of if statement 
    } 
    
    
    
    
    
    
    else {
      alert("Geolocation is not supported by this browser.");
    }
    
  }, []);
    

  useEffect(() => {


    
    const res=fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${location.latitude}&lon=${location.longitude}&appid=877c1f7d0938d6c1e3c2ff50f4b898d5`)
    .then(x=>x.json())
    .then(y=>{
      
      console.log(y)
      setArea({
        state: y[0].state,
        city: y[0].name
      })
    })
    .catch(z=>{console.log("error",z)})
    
  }, [location.latitude, location.longitude]);



  return (
    <div className='my-5'>
      <h3>Purchased from</h3>
      <div>City:- {area.city}</div>
      <div>State:- {area.state}</div>
    </div>
  );
};

export default Location;