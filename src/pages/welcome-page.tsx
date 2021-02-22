import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const welcomePage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from the welcome page</h1>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default welcomePage;
