import { City } from '../../types/city';

type PlacesListEmptyProps = {
  city: City;
}

function PlacesListEmpty ({city}: PlacesListEmptyProps) {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
    </div>
  );
}

export default PlacesListEmpty;
