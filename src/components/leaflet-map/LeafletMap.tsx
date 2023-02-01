import React from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const LeafletMap: React.FC = () => {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
  return (
    <div>
      <MapContainer
        center={[43.16689676691209, 44.80166469187365]}
        zoom={20}
        style={{ width: '100vw', height: '665px' }}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        />
        <Marker position={[43.16689676691209, 44.80166469187365]}>
          <Popup>Погрузка</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// import React from 'react';
// import 'leaflet/dist/leaflet.css';
// import { MapContainer, TileLayer } from 'react-leaflet';

// export const LeafletMap = () => {
//   return (
//     <MapContainer center={[48.71291, 44.52693]} zoom={13}>
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
//     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//   />
//     </MapContainer>
//   );
// };
