import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';



function Map({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));


  const center = getCenter(coordinates);
  //console.log(center);

  const [viewport, setViewport] = useState({

    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  //console.log(selectedLocation);




  return (
    <ReactMapGL
      mapStyle='mapbox://styles/sandro-servo/ckxtog3fhdf8h14le8dp8820v'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >📌</p>
          </Marker>
          {/* The popup that show if we click on  a  marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}

    </ReactMapGL>
  )
}

export default Map
