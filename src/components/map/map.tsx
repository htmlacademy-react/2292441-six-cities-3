import { useEffect, useRef } from 'react';
import { City } from '../../types/offer';
import { Offers } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { layerGroup, Marker, Icon } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';

type MapProps = {
  city: City;
  offers: Offers;
  activeCardId?: string;
  className: string;
};

const customDefaultMarker = new Icon(
  {
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  }
);

const customActiveMarker = new Icon(
  {
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  }
);

function Map({city, offers, activeCardId, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon((activeCardId === offer.id) ? customActiveMarker : customDefaultMarker);
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeCardId]);

  return (
    <section className={`${className} map`} ref={mapRef} />
  );
}

export default Map;
