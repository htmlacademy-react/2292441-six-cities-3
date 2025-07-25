/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useActiveCard } from '../../hooks/use-active-card';
import { memo } from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { useFavorite } from '../../hooks/use-favorite';
import { usePlaceCardClasses } from '../../hooks/use-place-card-classes';
import { getRatingStyle } from '../../util/get-rating-style';

type PlaceCardProps = {
  offer: Offer;
  parent: string;
};

function PlaceCard({offer, parent}: PlaceCardProps): JSX.Element {
  const route = `/offer/${offer.id}`;
  const ratingWidth = getRatingStyle(offer.rating);
  const type = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);
  const {isMainList, isFavorites, card, imageWrapper} = usePlaceCardClasses(parent);
  const {handleCardMouseOver, handleCardMouseOut} = useActiveCard(offer.id);
  const {isFavorite, handleButtonClick} = useFavorite(offer);

  return (
    <article
      className={card}
      onMouseOver={isMainList ? handleCardMouseOver : undefined}
      onMouseOut={isMainList ? handleCardMouseOut : undefined}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={imageWrapper}>
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
            handleButtonClick={handleButtonClick}
            element='place-card'
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={route}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
