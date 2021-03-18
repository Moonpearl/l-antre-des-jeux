import { Node } from 'gatsby';
import TypeName from '../type-name';

export default interface Asset extends Node {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  id: string;
  locale: string;
  remoteId: string;
  remoteTypeName: TypeName;
  stage: string;
}
