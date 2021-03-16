import React, { FC } from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const NotFoundPage: FC = () => (
  <IndexLayout title="404" description="Page non trouvé" keywords="404, notFound"
    openGraphTitle="404" openGraphDescription="..."
    openGraphImage="" openGraphLocale="fr_FRANCE" openGraphType="website" openGraphUrl="...">
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You&apos;ve hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
