import GraphCmsColor from '../color';
import GraphcmsImage from '../image';
import Asset from './asset';
import Employee from './employee';
import Palette from './palette';

export default interface GlobalContent extends Asset {
  shopDescription: string;
  shopAddress: string;
  shopPhone: string;
  shopEmail: string;
  shopLocation: {
    latitude: number;
    longitude: number;
  };
  shopBackgroundColor: GraphCmsColor;
  shopTitleColor: GraphCmsColor;
  shopBackgroundImage: GraphcmsImage;
  socialFacebook: string;
  socialTwitter: string;
  socialInstagram: string;
  keywords: string[];
  siteName: string;
  employees?: Employee[];
  defaultPalette: Palette;
}
