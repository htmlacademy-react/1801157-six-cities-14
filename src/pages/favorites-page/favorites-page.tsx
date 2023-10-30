import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { TOfferPreview } from '../../types/offer-preview';
import CitiesCard from '../../components/cities-card/cities-card';

type TFavoritesPageProps = {
  offers: TOfferPreview[];
}

function getFavoritesByCities(favorites: TOfferPreview[]) {
  return favorites.reduce<{ [key: string]: TOfferPreview[] }>((acc, curr) => {
    const city = curr.city.name;

    if (!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);

    return acc;
  }, {});
}

export default function FavoritesPage({ offers }: TFavoritesPageProps): JSX.Element {
  const favoritesByCity = getFavoritesByCities(offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(
                ([city, groupedFavorites]) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedFavorites.map((offer) => (
                        <CitiesCard
                          key={offer.id}
                          offer={offer}
                          block="favorite"
                          size="small"
                        />
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
