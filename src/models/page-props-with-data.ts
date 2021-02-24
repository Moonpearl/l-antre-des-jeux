import { PageProps } from 'gatsby';
import { GraphcmsCollection } from './graphcms';
import { GraphcmsArticle, GraphcmsProduct, GraphcmsSelection, GraphcmsShelf } from './graphcms/assets';

interface PageData {
  allGraphCmsArticle?: GraphcmsCollection<GraphcmsArticle>;
  allGraphCmsProduct?: GraphcmsCollection<GraphcmsProduct>;
  allGraphCmsSelection?: GraphcmsCollection<GraphcmsSelection>;
  allGraphCmsShelf?: GraphcmsCollection<GraphcmsShelf>;
  graphCmsArticle?: GraphcmsArticle;
  graphCmsProduct?: GraphcmsProduct;
  graphCmsSelection?: GraphcmsSelection;
  graphCmsShelf?: GraphcmsShelf;
}

type PagePropsWithData = PageProps<PageData>;

export default PagePropsWithData;
