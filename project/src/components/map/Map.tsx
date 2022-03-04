import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap/useMap';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Offer} from '../../types/offers';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOffer: number | null;
  mapMods: string;
}

const defaultIconPin = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeIconPin = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, activeOffer, mapMods}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {

      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      });

      offers.forEach((offer) => {

        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(activeOffer !== null && offer.id === activeOffer ? activeIconPin : defaultIconPin)
          .addTo(map);

      });
    }
  }, [map, offers, activeOffer, city]);

  return <section className={`${mapMods} map`} ref={mapRef}/>;
}

export default Map;
