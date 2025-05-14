import { useEffect, useRef } from 'react';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { layerGroup, Marker } from 'leaflet';

type MapProps = {
  city: City;
  offers: Offers;
};

function Map({city, offers}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng
        });
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return (
    <section className='cities__map map' ref={mapRef} />
  );
}

export default Map;
