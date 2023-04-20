import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [90.0, -30.0, -0],
        center: [-5, -3],
        scale: 1100
      }}
      style={{
        width:"100%", 
        height:"100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#23239c"
        stroke="#c7c7c9"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-89.61696, 20.97537]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Merida, Mx"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
