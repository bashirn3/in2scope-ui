import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import schoolIcon from '../../assets/icons8-school-64 .png';
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
                iconUrl: markerIconPng,
                iconSize: [15, 26],
                iconAnchor: [12, 41],
              })
            }
          >
            {/* <a target="_blank" href="https://icons8.com/icon/111460/graduation-cap">School</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <Popup>
               <p>{school.schoolname}</p> 
               <p> Travel time: {school.travel_time}minutes</p>
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


// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import { Icon } from "leaflet";

// const Map = ({ data }) => {
//   const position = [51.509865, -0.118092]; // Initial map center

//   // Placeholder for personal marker based on postcode
//   // Replace these coordinates with actual coordinates obtained from geocoding the postcode
//   const personalMarkerPosition = [51.5007, -0.1246]; // Example coordinates (London Eye)


//   return (
//     <MapContainer
//       center={position}
//       zoom={10}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {data?.map((school, i) => (
//         <Marker
//           position={[school.latitude, school.longitude]}
//           key={i}
//           icon={
//             new Icon({
//               iconUrl: markerIconPng,
//               iconSize: [25, 41],
//               iconAnchor: [12, 41],
//             })
//           }
//         >
//           <Popup>
//             <p>{school.schoolname}</p>
//             <p> Travel time: {school.travel_time} minutes</p>
//             <a href={school.website} target="_blank" rel="noopener noreferrer">
//               Click to go to the school's website
//             </a>
//           </Popup>
//         </Marker>
//       ))}

//       {/* Personal Marker
//       <Marker
//         position={personalMarkerPosition}
//         icon={
//           new Icon({
//             iconUrl: markerIconPng,
//             iconSize: [25, 41],
//             iconAnchor: [12, 41],
//           })
//         }
//       > */}
//         {/* <Popup>
//           <p>Your personal location</p>
//         </Popup>
//       </Marker> */}
//     </MapContainer>
//   );
// };

// export default Map;


// async function getCoordinatesForPostcode(postcode) {
//     const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your API key
//     const url = https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(postcode)}&key=${apiKey};
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
  
//       if (data.status === "OK") {
//         const { lat, lng } = data.results[0].geometry.location;
//         return { latitude: lat, longitude: lng };
//       } else {
//         throw new Error(data.error_message || "Geocoding failed");
//       }
//     } catch (error) {
//       console.error("Error in geocoding:", error);
//       return null;
//     }
//   }