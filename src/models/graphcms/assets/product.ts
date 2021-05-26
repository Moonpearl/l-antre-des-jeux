import Asset from './asset';
import Category from './category';
import Mechanic from './mechanic';
import Selection from './selection';
import Shelf from './shelf';
import ProductVariant from './variant';

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
  productVariants?: ProductVariant[];
}
