/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

type BookmarkButtonProps = {
  isFavorite: boolean;
  handleButtonClick: () => void;
  element: string;
}

function BookmarkButton({isFavorite, handleButtonClick, element}: BookmarkButtonProps) {
  const isPlaceCard = element === 'place-card';

  return (
    <button
      className={`${element}__bookmark-button ${isFavorite ? `${element}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${element}__bookmark-icon`} width={isPlaceCard ? '18' : '31'} height={isPlaceCard ? '19' : '33'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default memo(BookmarkButton);
