import { PageProps } from 'gatsby';
import { GraphcmsCollection } from './graphcms';
import {
  GraphcmsCategory,
  GraphcmsMechanic,
  GraphcmsProduct,
  GraphcmsSelection,
  GraphcmsShelf,
  GraphcmsGlobalContent,
  GraphcmsPage,
} from './graphcms/assets';

interface PageData {
  allGraphCmsCategory?: GraphcmsCollection<GraphcmsCategory>;
  allGraphCmsMechanic?: GraphcmsCollection<GraphcmsMechanic>;
  allGraphCmsProduct?: GraphcmsCollection<GraphcmsProduct>;
  allGraphCmsSelection?: GraphcmsCollection<GraphcmsSelection>;
  allGraphCmsShelf?: GraphcmsCollection<GraphcmsShelf>;
  allGraphCmsPage?: GraphcmsCollection<GraphcmsPage>;
  graphCmsGlobalContent?: GraphcmsGlobalContent;
  graphCmsCategory?: GraphcmsCategory;
  graphCmsMechanic?: GraphcmsMechanic;
  graphCmsProduct?: GraphcmsProduct;
  graphCmsSelection?: GraphcmsSelection;
  graphCmsShelf?: GraphcmsShelf;
  graphCmsPage?: GraphcmsPage;
}

type PagePropsWithData = PageProps<PageData>;

export default PagePropsWithData;
