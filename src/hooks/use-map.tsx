import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/offer';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: City;
}

const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export function useMap({mapRef, city}: UseMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(
        TILE_LAYER_URL_PATTERN,
        {
          attribution: TILE_LAYER_ATTRIBUTION
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
