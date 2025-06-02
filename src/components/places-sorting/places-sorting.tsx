import { KeyboardEvent, useEffect, useState } from 'react';
import { SORTING_OPTIONS } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { UseBoolean } from '../../hooks/use-boolean';


type PlacesSortingProps = {
  getSortingOption: (option: SortingOption) => void;
};

function PlacesSorting({getSortingOption}: PlacesSortingProps): JSX.Element {
  const { isOn, off, toggle } = UseBoolean(false);
  const [currentOption, setCurrentOption] = useState(SORTING_OPTIONS[0] as SortingOption);

  const optionChangeHandler = (option: SortingOption) => {
    setCurrentOption(option);
    getSortingOption(option);
  };

  const renderOptionListHandler = () => {
    toggle();
  };

  useEffect(() => {
    if (isOn) {
      const escKeyDownHandler = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', () => escKeyDownHandler);

      return () => {
        document.removeEventListener('keydown', () => escKeyDownHandler);
      };
    }
  }, [isOn, off]);

  return(
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={renderOptionListHandler}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${ (isOn) ? 'places__options--opened' : ''}`}>
        {
          SORTING_OPTIONS.map((option) => (
            <li
              key={option}
              className={ `places__option ${(option === currentOption) ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => optionChangeHandler(option)}
            >{option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
