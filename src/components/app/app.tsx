import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import { TReview } from '../../types/review';


type TAppProps = {
  offers: TOffer[];
  reviews: TReview[];
}

export default function App({ offers, reviews }: TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ AppRoute.Main }
            element={ <MainPage offers = { offers } /> }
          />
          <Route
            path={ AppRoute.Login }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.Auth }
                redirectTo={ AppRoute.Main }
              >
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ `${AppRoute.Offer}/:offerId` }
            element={
              <OfferPage
                offers={ offers }
                reviews={ reviews }
              />
            }
          />
          <Route
            path={ AppRoute.Favorites }
            element={
              <PrivateRoute
                authorizationStatus={ AuthorizationStatus.NoAuth }
                redirectTo={ AppRoute.Login }
              >
                <FavoritesPage offers={ offers }/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={ <NotFoundPage /> }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
