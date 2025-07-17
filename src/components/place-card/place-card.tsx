/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useActiveCard } from '../../hooks/use-active-card';
import { memo } from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { useFavorite } from '../../hooks/use-favorite';
import { usePlaceCardClasses } from '../../hooks/use-place-card-classes';

type PlaceCardProps = {
  offer: Offer;
  parent: string;
};

function PlaceCard({offer, parent}: PlaceCardProps): JSX.Element {
  const route = `/offer/${offer.id}`;
  const {isMainList, isFavorites, card, imgWrapper} = usePlaceCardClasses(parent);
  const {activeCardHandler, noActiveCardHandler} = useActiveCard(offer.id);
  const {isFavorite, clickHandler} = useFavorite(offer);

  return (
    <article
      className={card}
      onMouseOver={isMainList ? activeCardHandler : undefined}
      onMouseOut={isMainList ? noActiveCardHandler : undefined}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={imgWrapper}>
        <Link to={route}>
          <img className="place-card__image" src={offer.previewImage} width={isFavorites ? '150' : '260'} height={isFavorites ? '110' : '200'} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            isFavorite={isFavorite}
            clickHandler={clickHandler}
            element='place-card'
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(offer.rating)}%`}}></span>
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
