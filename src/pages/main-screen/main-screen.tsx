import PlaceList from '../../components/places-list';
import Map from '../../components/map';
import { SORTING_OPTIONS } from '../../const';
import { useState } from 'react';
import CityTabs from '../../components/city-tabs';
import { useAppSelector } from '../../hooks/use-app-selector';
import PlacesSorting from '../../components/places-sorting';
import { SelectCity } from '../../store/slices/main-process/selectors';
import { SelectCurrentOffers } from '../../store/slices/offers-data/selectors';
import { SortingOption } from '../../types/sorting-option';
import { useCallback } from 'react';

function MainScreen(): JSX.Element {
  const city = useAppSelector(SelectCity);
  const offers = useAppSelector(SelectCurrentOffers);
  const [selectedSort, setSelectedSort] = useState(SORTING_OPTIONS[0] as SortingOption);
  const selectSortHandler = useCallback(setSelectedSort, [setSelectedSort]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city.name}</b>
            <PlacesSorting getSortingOption={selectSortHandler}/>
            <PlaceList
              offers={offers}
              sortingOption={selectedSort}
              isMainPage
            />
          </section>
          <div className="cities__right-section">
            <Map
              className='cities__map'
              city={city}
              offers={offers}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
