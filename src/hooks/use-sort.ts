import { useBoolean } from './use-boolean';
import { SORTING_OPTIONS } from '../const';
import { SortingOption } from '../types/sorting-option';
import { useEffect, useState } from 'react';

export const useSort = (onSortChange: (option: SortingOption) => void) => {
  const { isOn, off, toggle } = useBoolean(false);
  const [currentOption, setCurrentOption] = useState(SORTING_OPTIONS[0] as SortingOption);

  const handleOptionClick = (option: SortingOption) => {
    setCurrentOption(option);
    onSortChange(option);
  };

  const handleFormClick = () => {
    toggle();
  };

  useEffect(() => {
    if (isOn) {
      const handleFormKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', handleFormKeyDown);

      return () => {
        document.removeEventListener('keydown', handleFormKeyDown);
      };
    }
  }, [isOn, off]);

  return {isOn, currentOption, handleOptionClick, handleFormClick};
};
