import React, { FC } from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const ShelfPage: FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Nom du rayon</h1>
        <p>
          1 <Link to="/">Page 1</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default ShelfPage;
