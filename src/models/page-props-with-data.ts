import { PageProps } from 'gatsby';
import { GraphcmsCollection } from './graphcms';
import {
  GraphcmsArticle,
  GraphcmsCategory,
  GraphcmsGlobalContent,
  GraphcmsMechanic,
  GraphcmsProduct,
  GraphcmsSelection,
  GraphcmsShelf,
} from './graphcms/assets';

interface PageData {
  allGraphCmsArticle?: GraphcmsCollection<GraphcmsArticle>;
  allGraphCmsCategory?: GraphcmsCollection<GraphcmsCategory>;
  allGraphCmsMechanic?: GraphcmsCollection<GraphcmsMechanic>;
  allGraphCmsProduct?: GraphcmsCollection<GraphcmsProduct>;
  allGraphCmsSelection?: GraphcmsCollection<GraphcmsSelection>;
  allGraphCmsShelf?: GraphcmsCollection<GraphcmsShelf>;
  graphCmsArticle?: GraphcmsArticle;
  graphCmsGlobalContent?: GraphcmsGlobalContent;
  graphCmsCategory?: GraphcmsCategory;
  graphCmsMechanic?: GraphcmsMechanic;
  graphCmsProduct?: GraphcmsProduct;
  graphCmsSelection?: GraphcmsSelection;
  graphCmsShelf?: GraphcmsShelf;
}

type PagePropsWithData = PageProps<PageData>;

export default PagePropsWithData;
