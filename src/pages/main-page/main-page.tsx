import { Helmet } from 'react-helmet-async';
import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import { TOfferPreview } from '../../types/offer-preview';

type TMainPageProps = {
	offers: TOfferPreview[];
};

export default function MainPage({ offers }: TMainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <Cities offers={ offers } />
      </main>
    </div>
  );
}
