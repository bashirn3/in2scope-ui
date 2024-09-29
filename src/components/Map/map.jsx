import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import schoolIcon from "../../assets/icons8-school-50.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Icon } from "leaflet";
import ContactInfo from "../contact-info";

const Map = ({ data }) => {
  const position = [51.509865, -0.118092]; // Initial map center
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
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

            <Popup>
              <div style={{
                maxHeight: "500px",
                overflowY: "auto"
              }}>
                <p>{school.schoolname}</p>
                <p> Travel time: {school.travel_time} minutes</p>
                <a href={school.website} target="_blank" rel="noreferrer">
                  Click to go to the school's website
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2em",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleExpanded(school.id)}
                >
                  Contact Information{" "}
                  {expanded === school.id ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </div>
                {expanded === school.id && <ContactInfo id={school.id} />}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
