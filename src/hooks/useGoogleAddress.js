import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  // const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBClcx8Q8uyi0JbUM2MQeTjKQEUSC7BC5c`;
  const API = `http://api.positionstack.com/v1/forward?access_key=58feee8f84d24ff3f5a0dfe6345ac902&query=${address}`;
  console.log(API);
  useEffect(async () => {
    const res = await axios(API);
    setMap(res.data[0]);
  }, []);
  return map;
};

export default useGoogleAddress;
