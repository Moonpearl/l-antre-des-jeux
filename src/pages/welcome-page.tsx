import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import './welcome-page.css'
import './reset.css'

const welcomePage = () => (
  <IndexLayout>
    <Page>
      <Container>
        {/* UNDERLAY BG */}
        <ul>
          <li>
            <div>Img1</div>
          </li>
          <li>
            <div>Img2</div>
          </li>
          <li>
            <div>Img3</div>
          </li>
          <li>
            <div>Img4</div>
          </li>
          <li>
            <div>Img5</div>
          </li>
          <li>
            <div>Img6</div>
          </li>
          <li>
            <div>Img7</div>
          </li>
          <li>
            <div>Img8</div>
          </li>
        </ul>

        {/* OVERLAY */}
        <ul>
          <li>
            <div>Jeux de société</div>
          </li>
          <li>
            <div>Jeux d'enfants</div>
          </li>
          <li>
            <div>Jeux de figurines</div>
          </li>
          <li>
            <div>Jeux de roles</div>
          </li>
          <li>
            <div>Jeux d'histoires</div>
          </li>
          <li>
            <div>Jeux de cartes</div>
          </li>
          <li>
            <div>Jeux classiques</div>
          </li>
          <li>
            <div>Accessoires</div>
          </li>
        </ul>

        <ul>
          {/* FOOTER */}
          <div className="footer">
            <p>Copyright 2021 - L'Antre des jeux</p>
            <li>
              <Link to="/">Take me back home.</Link>
            </li>
          </div>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default welcomePage
