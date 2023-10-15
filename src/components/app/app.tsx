import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  placesCount: number;
}

export default function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage placesCount = {placesCount} />
  );
}
