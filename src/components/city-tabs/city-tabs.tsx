/* eslint-disable react-refresh/only-export-components */
import { CITIES } from '../../const';
import { useCity } from '../../hooks/use-city';
import { memo } from 'react';

function CityTabs(): JSX.Element {
  const {currentCity, cityChangeHandler} = useCity();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${(city.name === currentCity.name) ? 'tabs__item--active' : ''}`}
                onClick={cityChangeHandler(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(CityTabs);
