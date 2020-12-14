import "../styles/map.scss";

import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      style={{ height: "100vh", width: "50vw" }}
      center={position}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
