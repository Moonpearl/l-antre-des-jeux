import Asset from './asset';
import Category from './category';
import Mechanic from './mechanic';
import Selection from './selection';
import Shelf from './shelf';

export default interface Product extends Asset {
  ebpId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  minPlaytime: number;
  maxPlaytime: number;
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  shelf?: Shelf;
  selections?: Selection[];
  categories?: Category[];
  mechanics?: Mechanic[];
}
