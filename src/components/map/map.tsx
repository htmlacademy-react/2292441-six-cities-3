/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, memo } from 'react';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { layerGroup, Marker, Icon, LatLng } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SelectActiveCard } from '../../store/slices/main-process/selectors';

type MapProps = {
  city: City;
  offers: Offers;
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

function Map({offers, className, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const activeOfferId = useAppSelector(SelectActiveCard);

  useEffect(() => {
    if (map && offers) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon((activeOfferId === offer.id) ? customActiveMarker : customDefaultMarker);
        marker.addTo(markerLayer);
      });

      map.setView(new LatLng(city.location.latitude, city.location.longitude));

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId, city]);

  return (
    <section className={`${className} map`} ref={mapRef} />
  );
}

export default memo(Map);
