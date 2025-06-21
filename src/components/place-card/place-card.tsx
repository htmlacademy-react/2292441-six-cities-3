import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { PropsWithChildren } from 'react';
import { MAIN_PLACES_LIST_CLASSES } from '../../const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveOfferId } from '../../store/action';

type PlaceCardProps = {
  offer: Offer;
  className: string;
};

function PlaceCard({offer, className}: PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const route = `/offer/${offer.id}`;

  const activeCardHandler = () => {
    dispatch(setActiveOfferId(offer.id));
  };

  const noActiveCardHandler = () => {
    dispatch(setActiveOfferId(''));
  };

  function Wrapper({children}: PropsWithChildren) {
    return (className === MAIN_PLACES_LIST_CLASSES.itemClass)
      ?
      <article
        className={`${className} place-card`}
        onMouseOver={activeCardHandler}
        onMouseOut={noActiveCardHandler}
      >
        {children}
      </article>
      :
      (<article className={`${className} place-card`}>{children}</article>);
  }

  return (
    <Wrapper>
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
          <button className="place-card__bookmark-button button" type="button">
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
    </Wrapper>
  );
}

export default PlaceCard;
