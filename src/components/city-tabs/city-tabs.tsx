import { MouseEvent } from 'react';
import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fillPlacesList, setCity } from '../../store/action';
import { City } from '../../types/city';
import { SelectCity } from '../../store/selectors/city';

function CityTabs(): JSX.Element {
  const currentCity = useAppSelector(SelectCity);
  const dispatch = useAppDispatch();

  const cityChangeHandler = (evt: MouseEvent, city: City) => {
    evt.preventDefault();
    dispatch(setCity(city));
    dispatch(fillPlacesList(city.name));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city.name}>
              <a className={`locations__item-link tabs__item ${(city.name === currentCity.name) ? 'tabs__item--active' : ''}`}
                onClick={(evt) => cityChangeHandler(evt, city)}
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

export default CityTabs;
