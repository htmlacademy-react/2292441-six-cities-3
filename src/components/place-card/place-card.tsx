/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useActiveCard } from '../../hooks/use-active-card';
import { memo } from 'react';
import { useFavorite } from '../../hooks/use-favorite';

type PlaceCardProps = {
  offer: Offer;
  className: string;
  isMainPage?: boolean;
};

function PlaceCard({offer, className, isMainPage}: PlaceCardProps): JSX.Element {
  const route = `/offer/${offer.id}`;
  const {activeCardHandler, noActiveCardHandler} = useActiveCard(offer.id);
  const {isFavorite, favoriteClickHandler} = useFavorite(offer);

  return (
    <article
      className={`${className} place-card`}
      onMouseOver={isMainPage ? activeCardHandler : undefined}
      onMouseOut={isMainPage ? noActiveCardHandler : undefined}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={route}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={favoriteClickHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={route}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
