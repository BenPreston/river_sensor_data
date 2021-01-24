import { Icon } from '@iconify/react';
import stormAdvisory from '@iconify/icons-mdi/storm-advisory';

const MapMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="map-marker marker" onClick={onClick}>
      <Icon icon={stormAdvisory} className="map_marker" />
    </div>
  );
};

export default MapMarker;
