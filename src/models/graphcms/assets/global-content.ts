import Asset from './asset';
import Employee from './employee';

export default interface GlobalContent extends Asset {
  shopDescription: string;
  shopAddress: string;
  shopPhone: string;
  shopEmail: string;
  shopLocation: {
    latitude: number;
    longitude: number;
  };
  socialFacebook: string;
  socialTwitter: string;
  socialInstagram: string;
  employees: Employee[];
}
