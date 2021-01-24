import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'

function Map({ data, center, zoom }) {
  console.log(data);

  const markers = data.map((entry) => (
    <MapMarker lat={entry.original.latitude} lng={entry.original.longitude} />
    // {
    //   lat: entry.original.latitude,
    //   lng: entry.original.longitude  
    // }
))

  return (
    <div className="map">
      <h2>Map section</h2>
      <p>You can see any data selected in the table above in this map below</p>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers  }
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 51.205424,
    lng: -1.369337,
  },
  zoom: 8,
};

export default Map;