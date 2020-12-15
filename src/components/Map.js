import { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const [center, setCenter] = useState({
    lat: 50.06776785677562,
    lng: 19.90621459887921,
  });
  const position = [51.505, -0.09];
  return (
    <MapContainer
      style={{ height: "50vh", width: "50vw" }}
      center={center}
      zoom={20}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Kox akademik <br /> Pozdro 406!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
