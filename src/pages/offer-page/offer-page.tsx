import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { TOffer } from '../../types/offer';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, CitiesLocation, MAX_NEAR_PLACES_COUNT } from '../../const';
import OfferDetails from '../../components/offer-details/offer-details';
import { TReview } from '../../types/review';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesCard from '../../components/cities-card/cities-card';

type TOfferPageProps = {
  offers: TOffer[];
  reviews: TReview[];
}

export default function OfferPage({ offers, reviews }: TOfferPageProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === offerId);
  const activeCity = CitiesLocation.Amsterdam;

  const [hoverNearOfferId, setHoverNearOfferId] = useState<
    TOffer['id'] | null
  >(null);

  function handleCardHover(nearOfferId: TOffer['id'] | null) { // fix
    setHoverNearOfferId(nearOfferId);
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities: ${offer.title}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} reviews={reviews}/>
          <section className="offer__map map">
            <Map
              location={activeCity.location}
              block='offer'
              offers={offers}
              specialOfferId={hoverNearOfferId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_NEAR_PLACES_COUNT).map((nearOffer) => ( // fix
                <CitiesCard
                  key={nearOffer.id}
                  offer={nearOffer}
                  block='near-places'
                  onCardHover={handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
