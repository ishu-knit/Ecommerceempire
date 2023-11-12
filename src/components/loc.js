import React, { useEffect, useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);


  const res=fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=28.5735&lon=77.3208&appid=877c1f7d0938d6c1e3c2ff50f4b898d5"`)
  .then(x=>x.json())
  .then(y=>console.log(y))
  .catch(z=>{console.log("error",z)})

  return (
    <div>
      <h2>Your Current Location</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p></p>
    </div>
  );
};

export default Location;