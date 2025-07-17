import ReviewForm from '../../components/review-form';
import ReviewsList from '../../components/reviews-list';
import Map from '../../components/map';
import { AuthorizationStatus, RequestStatus } from '../../const';
import PlacesList from '../../components/places-list';
import Spinner from '../../components/spinner';
import NotFoundScreen from '../not-found-screen';
import { useFullOffer } from '../../hooks/use-full-offer';
import BookmarkButton from '../../components/bookmark-button';
import { useFavorite } from '../../hooks/use-favorite';

function OfferScreen(): JSX.Element {
  const {city, offers, offer, images, sortedReviews, nearbyOffers, status, authorizationStatus} = useFullOffer();
  const {isFavorite, clickHandler} = useFavorite(offer);

  if (status === RequestStatus.Loading || status === RequestStatus.Idle) {
    return <Spinner />;
  }

  if (status === RequestStatus.Failed || !offer) {
    return <NotFoundScreen />;
  }

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((e, i) => {
              const keyValue = `${i}-${e}`;
              return (
                <div key={keyValue} className="offer__image-wrapper">
                  <img className="offer__image" src={e} alt="Photo studio"/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <BookmarkButton
                isFavorite={isFavorite}
                clickHandler={clickHandler}
                element='offer'
              />
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${20 * Math.round(offer.rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {
                  offer.goods && offer.goods.map((e) => (
                    <li className="offer__inside-item" key={e}>
                      {e}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offer.host.name}
                </span>
                {
                  offer.host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>
                }
              </div>
              <div className="offer__description">
                {offer.description}
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
              <ReviewsList reviews={sortedReviews} />
              {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm /> : null}
            </section>
          </div>
        </div>
        <Map
          className='offer__map'
          city={city}
          offers={offers}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            offers={nearbyOffers}
            element='near-places__list'
          />
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
