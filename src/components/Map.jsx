import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map({ data }) {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 14.6229,
    lng: -90.5315,
  };
  // const defaultCenter = {
  //   lat: data.latitude,
  //   lng: data.longitude,
  // };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBClcx8Q8uyi0JbUM2MQeTjKQEUSC7BC5c">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Map;
