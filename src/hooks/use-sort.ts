import { useBoolean } from './use-boolean';
import { SORTING_OPTIONS } from '../const';
import { SortingOption } from '../types/sorting-option';
import { useEffect, useState } from 'react';

export const useSort = (getSortingOption: (option: SortingOption) => void) => {
  const { isOn, off, toggle } = useBoolean(false);
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

  return {isOn, currentOption, optionChangeHandler, renderOptionListHandler};
};
