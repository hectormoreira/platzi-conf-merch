import { useState, useEffect } from 'react';
import axios from 'axios';
const POSITIONSTACKKEY = process.env.POSITIONSTACKKEY;

const usePositionStackAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACKKEY}&query=${address}`;

  useEffect(async () => {
    console.log(API);
    const response = await axios(API);
    console.log('response',response);
    setMap(response.data.data[0]);
    return map;
  }, []);
};

export default usePositionStackAddress;
