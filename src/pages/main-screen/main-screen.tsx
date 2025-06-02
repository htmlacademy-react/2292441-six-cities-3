import PlaceList from '../../components/places-list';
import Map from '../../components/map';
import {MAIN_PLACES_LIST_CLASSES } from '../../const';
import { useState } from 'react';
import CityTabs from '../../components/city-tabs';
import { useAppSelector } from '../../hooks/use-app-selector';
import PlacesSorting from '../../components/places-sorting';

function MainScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const [activeCardId, setActiveCardId] = useState('');

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city.name}</b>
            <PlacesSorting />
            <PlaceList
              classNames={MAIN_PLACES_LIST_CLASSES}
              offers={offers}
              getActiveCardId={(id) => setActiveCardId(id)}
            />
          </section>
          <div className="cities__right-section">
            <Map
              className='cities__map'
              city={city} offers={offers}
              activeCardId={activeCardId}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
