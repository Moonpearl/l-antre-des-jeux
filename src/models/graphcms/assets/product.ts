import Asset from './asset';
import Selection from './selection';
import Shelf from './shelf';

export default interface Product extends Asset {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  minPlaytime: number;
  maxPlaytime: number;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  shelf: Shelf;
  selections: Selection[];
}
