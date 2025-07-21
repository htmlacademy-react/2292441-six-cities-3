import PlaceList from '../../components/places-list';
import Map from '../../components/map';
import { RequestStatus, SORTING_OPTIONS } from '../../const';
import { useMemo, useState } from 'react';
import CityTabs from '../../components/city-tabs';
import { useAppSelector } from '../../hooks/use-app-selector';
import PlacesSorting from '../../components/places-sorting';
import { selectCity } from '../../store/slices/main-process/selectors';
import { selectCurrentOffers } from '../../store/selectors/select-current-offers';
import { SortingOption } from '../../types/sorting-option';
import { useCallback } from 'react';
import PlacesListEmpty from '../../components/places-list-empty';
import { selectOffersRequestStatus } from '../../store/slices/offers-data/selectors';

function MainScreen(): JSX.Element {
  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectCurrentOffers);
  const memoizedOffers = useMemo(() => offers, [offers]);
  const status = useAppSelector(selectOffersRequestStatus);
  const isListEmpty = status === RequestStatus.Success && !offers.length;
  const [selectedSort, setSelectedSort] = useState(SORTING_OPTIONS[0] as SortingOption);
  const selectSortHandler = useCallback(setSelectedSort, [setSelectedSort]);

  return (
    <main className={`page__main page__main--index ${isListEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs />
      <div className="cities">
        <div className={`cities__places-container ${isListEmpty ? 'cities__places-container--empty' : ''} container`}>
          <section className={isListEmpty ? 'cities__no-places' : 'cities__places places'}>
            {isListEmpty ? <PlacesListEmpty city={city} /> :
              <>
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.name}</b>
                <PlacesSorting onSortChange={selectSortHandler}/>
                <PlaceList
                  offers={memoizedOffers}
                  sortingOption={selectedSort}
                  element='cities__places-list'
                />
              </>}
          </section>
          <div className="cities__right-section">
            {isListEmpty ? null :
              <Map
                className='cities__map'
                city={city}
                offers={offers}
              />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
