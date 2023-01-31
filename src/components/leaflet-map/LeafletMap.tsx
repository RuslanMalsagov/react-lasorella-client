import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Polyline, Popup } from 'react-leaflet';

export const LeafletMap = () => {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
  return (
    <div>
      <MapContainer center={[59.84660399, 30.29496392]} zoom={10} style={{ width: '50vw', height: '100vh' }} scrollWheelZoom={true}>
        <Layers />
        <Polyline color={'red'} opacity={0.7} weight={8} positions={[59.84660399, 30.29496392]}></Polyline>
        {/* {loadingLat !== undefined ? (
          <>
            <Marker position={position}>
              <Popup>Погрузка</Popup>
            </Marker>
            <Marker position={position2}>
              <Popup>Разгрузка</Popup>
            </Marker>
            <Routing from={position} to={position2} />
          </>
        ) : null} */}
      </MapContainer>
    </div>
  );
};
