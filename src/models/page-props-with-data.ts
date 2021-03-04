import { PageProps } from 'gatsby';
import { GraphcmsCollection } from './graphcms';
import { GraphcmsArticle, GraphcmsGlobalContent, GraphcmsProduct, GraphcmsSelection, GraphcmsShelf } from './graphcms/assets';

interface PageData {
  allGraphCmsArticle?: GraphcmsCollection<GraphcmsArticle>;
  allGraphCmsProduct?: GraphcmsCollection<GraphcmsProduct>;
  allGraphCmsSelection?: GraphcmsCollection<GraphcmsSelection>;
  allGraphCmsShelf?: GraphcmsCollection<GraphcmsShelf>;
  graphCmsArticle?: GraphcmsArticle;
  graphCmsGlobalContent?: GraphcmsGlobalContent;
  graphCmsProduct?: GraphcmsProduct;
  graphCmsSelection?: GraphcmsSelection;
  graphCmsShelf?: GraphcmsShelf;
}

type PagePropsWithData = PageProps<PageData>;

export default PagePropsWithData;
