/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, memo } from 'react';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { layerGroup, Marker, Icon, LatLng } from 'leaflet';
import { MapMarkerUrl } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectActiveCard } from '../../store/slices/main-process/selectors';

type MapProps = {
  city: City;
  offers: Offers;
  className: string;
};

const customDefaultMarker = new Icon(
  {
    iconUrl: MapMarkerUrl.Default,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  }
);

const customActiveMarker = new Icon(
  {
    iconUrl: MapMarkerUrl.Active,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  }
);

function Map({offers, className, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const activeOfferId = useAppSelector(selectActiveCard);

  useEffect(() => {
    if (map) {
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
