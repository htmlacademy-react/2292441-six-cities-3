/* eslint-disable react-refresh/only-export-components */
import { SORTING_OPTIONS } from '../../const';
import { SortingOption } from '../../types/sorting-option';
import { useSort } from '../../hooks/use-sort';
import { memo } from 'react';

type PlacesSortingProps = {
  onSortChange: (option: SortingOption) => void;
};

function PlacesSorting({onSortChange}: PlacesSortingProps): JSX.Element {
  const {isOn, currentOption, handleOptionClick, handleFormClick} = useSort(onSortChange);

  return(
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleFormClick}
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
              onClick={() => handleOptionClick(option)}
            >{option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default memo(PlacesSorting);
