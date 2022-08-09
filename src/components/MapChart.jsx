import React from "react";
// import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Sonora",
    coordinates: [-110.868889, 29.646111]
  },
  {markerOffset: -30, name: "Nuevo León", coordinates: [-99.8191829, 26.1337027]},
  {markerOffset: -30, name: "San Luis Potosí", coordinates: [-101.0915554, 22.0783035]},
  {markerOffset: -30, name: "Michoacán", coordinates: [-102.642779, 18.614256]},
  {markerOffset: -30, name: "Guerrero", coordinates: [-99.826139, 16.794479]},

];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAlbers"
      projectionConfig={{
        rotate: [101, 15, 0],
        scale: 1500
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0494bf"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#ffffff" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;