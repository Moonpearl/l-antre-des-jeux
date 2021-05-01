import Asset from './asset';
import GraphcmsImage from '../image';
import Palette from './palette';

export default interface Page extends Asset {
  title: string;
  description: string;
  wavePath: string;
  openGraphImage: GraphcmsImage;
  palette: Palette;
}
