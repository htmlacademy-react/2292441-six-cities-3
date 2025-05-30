import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ReviewForm from '../../components/review-form';
import ReviewsList from '../../components/reviews-list';
import Map from '../../components/map';
import { NEAR_PLACES_LIST_CLASSES } from '../../const';
import { getNearOffers } from './util';
import PlacesList from '../../components/places-list';
import { useAppSelector } from '../../hooks/use-app-selector';


function OfferScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const offerId = useParams().id as string;
  const offer = offers.find((e) => e.id.toString() === offerId);

  if (!offer) {
    return <NotFoundScreen />;
  }

  const nearOffers = getNearOffers(offers, offer);

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.map((e, i) => {
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
              offer.premium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${20 * offer.rating}%`}}></span>
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
                Max {offer.capacity} adults
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
                  offer.features.wiFi &&
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                }
                {
                  offer.features.washingMachine &&
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                }
                {
                  offer.features.towels &&
                  <li className="offer__inside-item">
                    Towels
                  </li>
                }
                {
                  offer.features.heating &&
                  <li className="offer__inside-item">
                    Heating
                  </li>
                }
                {
                  offer.features.coffeeMachine &&
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                }
                {
                  offer.features.babySeat &&
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                }
                {
                  offer.features.kitchen &&
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                }
                {
                  offer.features.dishwasher &&
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                }
                {
                  offer.features.cabelTV &&
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                }
                {
                  offer.features.fridge &&
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                }
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${offer.host.pro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offer.host.name}
                </span>
                {
                  offer.host.pro &&
                    <span className="offer__user-status">
                      Pro
                    </span>
                }
              </div>
              <div className="offer__description">
                {offer.description.map((e, i) => {
                  const keyValue = `${i}-${e}`;
                  return (
                    <p key={keyValue} className="offer__text">
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
              <ReviewsList reviews={offer.reviews} />
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map
          className='offer__map'
          city={city}
          offers={offers}
          activeCardId={offer.id}
        />
      </section>
      {
        (nearOffers[0]) &&
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              classNames={NEAR_PLACES_LIST_CLASSES}
              offers={nearOffers}
            />
          </section>
        </div>
      }
    </main>
  );
}

export default OfferScreen;
