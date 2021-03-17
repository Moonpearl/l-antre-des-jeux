import { PageProps } from 'gatsby';
import { GraphcmsCollection } from './graphcms';
import {
  GraphcmsArticle, GraphcmsCategory, GraphcmsMechanic,
  GraphcmsProduct, GraphcmsSelection, GraphcmsShelf,
  GraphcmsGlobalContent, GraphcmsPages
} from './graphcms/assets';

interface PageData {
  allGraphCmsArticle?: GraphcmsCollection<GraphcmsArticle>;
  allGraphCmsCategory?: GraphcmsCollection<GraphcmsCategory>;
  allGraphCmsMechanic?: GraphcmsCollection<GraphcmsMechanic>;
  allGraphCmsProduct?: GraphcmsCollection<GraphcmsProduct>;
  allGraphCmsSelection?: GraphcmsCollection<GraphcmsSelection>;
  allGraphCmsShelf?: GraphcmsCollection<GraphcmsShelf>;
  allGraphCmsPages?: GraphcmsCollection<GraphcmsPages>;
  graphCmsArticle?: GraphcmsArticle;
  graphCmsGlobalContent?: GraphcmsGlobalContent;
  graphCmsCategory?: GraphcmsCategory;
  graphCmsMechanic?: GraphcmsMechanic;
  graphCmsProduct?: GraphcmsProduct;
  graphCmsSelection?: GraphcmsSelection;
  graphCmsShelf?: GraphcmsShelf;
  graphCmsPages?: GraphcmsPages;
}

type PagePropsWithData = PageProps<PageData>;

export default PagePropsWithData;
