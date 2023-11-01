import { CitiesName } from '../const';
import { TLocation } from './location';

export type TCity = {
  location: TLocation;
  name: CitiesName;
}
