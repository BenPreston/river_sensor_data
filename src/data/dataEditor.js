import data from './data.json';

const tableData = data.map((item) => {
  const isoDate = item.transmittedAt && item.transmittedAt.iso;

  if (isoDate) {
    item.transmittedAt = isoDate;
  } else {
    item.transmittedAt = 'Unknown';
  }

  return {
    id: item.id,
    direction: item.direction,
    transmittedAt: item.transmittedAt,
    latitude: item.latitude,
    longitude: item.longitude,
    sensorId: item.sensorId,
    payload: item.payload,
    bytes: item.bytes,
  };
});

export default tableData;
