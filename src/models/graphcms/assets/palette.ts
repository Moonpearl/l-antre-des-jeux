import { GrahpcmsColor } from '..';
import Asset from './asset';

export default interface Palette extends Asset {
  name: string;
  backgroundColor: GrahpcmsColor;
  frameBackgroundColor: GrahpcmsColor;
  frameTextColor: GrahpcmsColor;
  headerBackgroundColor: GrahpcmsColor;
  headerHighlightColor: GrahpcmsColor;
  headerTextColor: GrahpcmsColor;
  textColor: GrahpcmsColor;
  titleColor: GrahpcmsColor;
  titleHighlightColor: GrahpcmsColor;
}
