import GoogleMapReact from 'google-map-react';

function Map({ center, zoom }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: -22,
    lng: 46.5,
  },
  zoom: 5,
};

export default Map;