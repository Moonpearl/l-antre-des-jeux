import { GraphcmsAsset } from './assets';

export default interface GraphcmsImage extends GraphcmsAsset {
  fileName: string;
  handle: string;
  mimeType: string;
  stage: string;
  url: string;
  size: number;
  width: number;
  height: number;
}
