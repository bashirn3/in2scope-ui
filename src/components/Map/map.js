import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import schoolIcon from '../../assets/icons8-school-50.png';
import { Icon } from "leaflet";

const Map = ({ data }) => {
  const position = [51.509865, -0.118092]; // Initial map center


  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data?.map((school, i) => {
        return (
          <Marker
            position={[school.latitude, school.longitude]}
            key={i}
            icon={
              new Icon({
                iconUrl: schoolIcon,
                iconSize: [15, 26],
                iconAnchor: [12, 41],
              })
            }
          >
            {/* <a target="_blank" href="https://icons8.com/icon/111460/graduation-cap">School</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <Popup>
               <p>{school.schoolname}</p> 
               <p> Travel time: {school.travel_time} minutes</p>
              <a href={school.website} target="_blank">
                Click to go to the school's website
              </a>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

