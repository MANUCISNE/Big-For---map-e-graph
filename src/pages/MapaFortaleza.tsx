import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Coordenada {
  lat: number;
  lng: number;
}

export function MapaFortaleza() {
  const position = [-3.7327, -38.5267]; // coordenadas do centro de Fortaleza

  const coordenadas: Coordenada[] = [
    { lat: -3.754215, lng: -38.547869 }, // Praia do Futuro
    { lat: -3.725504, lng: -38.533207 }, // Centro Dragão do Mar de Arte e Cultura
    { lat: -3.747674, lng: -38.481213 }, // Beach Park
    { lat: -3.789543, lng: -38.478949 }, // Praia de Cumbuco
    { lat: -3.780832, lng: -38.651439 }, // Parque do Cocó
  ];

  return (
    <MapContainer>
      <TileLayer 
      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}/>
    
        <Marker position={position}>
         <Popup>Fortaleza</Popup>
        </Marker>
          {coordenadas.map((coordenada, index) => (
        <Marker key={index} position={[coordenada.lat, coordenada.lng]}>
          <Popup>Marker {index + 1}</Popup>
        </Marker>
        
      ))}
    
    </MapContainer>
  );
}

