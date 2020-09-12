import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

import Home from '../Home';

const App = () => {
  const [state, setstate] = useState();
  const getWeatherInfo = async (latLong) => {
    try
    {
      const res = await axios({
        url: 'http://localhost:5000/api/weather/info/',
        method: 'post',
        data: {
          latLong
        }
      });
      if (res.data)
      {
        setstate(res.data);
      }
    } catch (e)
    {
      console.log(e);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator)
    {
      navigator.geolocation.getCurrentPosition(
        (geoloc) => {
          console.log(geoloc);
          getWeatherInfo({ lat: geoloc.coords.latitude, long: geoloc.coords.longitude });
        },
        (err) => console.log(err))
    }
  }, [])

  return (
    <div className="App">
      {
        state && <Home state={state} />
      }
    </div>
  );
}

export default App;
