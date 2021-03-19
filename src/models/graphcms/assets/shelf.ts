import GraphcmsColor from '../color';
import GraphcmsImage from '../image';
import Asset from './asset';
import Product from './product';
import Palette from './palette';

export default interface Shelf extends Asset {
  name: string;
  description: string;
  products?: Product[];
  backgroundImage: GraphcmsImage;
  backgroundColor: GraphcmsColor;
  titleColor: GraphcmsColor;
  palette: Palette;
}
