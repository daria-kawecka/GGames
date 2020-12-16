import { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { icon } from "leaflet";
import markerPng from "../images/marker.png";

const markerIcon = new L.icon({
  iconUrl: markerPng,
  iconSize: [38, 38],
});

const Map = () => {
  const [center, setCenter] = useState({
    lat: 50.06788229093258,
    lng: 19.906194021309684,
  });
  return (
    <MapContainer
      style={{ height: "40vh", width: "40vw" }}
      center={center}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={markerIcon}>
        <Popup>
          Kox akademik <br /> Pozdro 406!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
