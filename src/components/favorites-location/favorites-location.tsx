import { ReactNode } from 'react';
import { City } from '../../types/city';

type FavoritesLocationProps = {
  city: City;
  children: ReactNode;
}

function FavoritesLocation ({city, children}: FavoritesLocationProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      {children}
    </li>
  );
}

export default FavoritesLocation;
