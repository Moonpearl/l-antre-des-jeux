import * as React from 'react'
import IndexLayout from '../layouts'

import './welcome-page.css'
import './reset.css'

import Img01 from '../images/societe.jpg'
import Img02 from '../images/enfants.jpg'
import Img03 from '../images/figurines.jpg'
import Img04 from '../images/roleplayer.jpg'
import Img05 from '../images/history.jpg'
import Img06 from '../images/cards.jpg'
import Img07 from '../images/classic.jpg'
import Img08 from '../images/accessory.jpg'
import { relative } from 'path'

const welcomePage = () => (
  <IndexLayout>
    <div>
      {/* UNDERLAY BG */}
      <div>
        <ul>
          <li className="frame" style={{ backgroundColor: 'red', padding: '4em' }}>
            <div style={{ position: 'relative', top: '8em', backgroundColor: 'darkred', padding: '2em', maxWidth: '20em' }}>
              <h2>Nom du rayon</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta assumenda? Accusamus, molestias!</p>
              <button type="button">En voir plus</button>
            </div>
          </li>
          <li className="frame" style={{ backgroundColor: 'blue', padding: '4em' }}>
            <div style={{ position: 'relative', top: '8em', backgroundColor: 'darkblue', padding: '2em', maxWidth: '20em' }}>
              <h2>Nom du rayon</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eaque debitis, fugit dicta impedit ut obcaecati commodi beatae, placeat quo at doloremque nobis earum natus facilis architecto est atque ex, itaque dolore alias. Quas officia tempore vitae eum consequatur sunt quod autem aperiam laboriosam ut, tenetur nulla expedita debitis impedit assumenda obcaecati culpa velit ducimus porro reiciendis numquam nihil aut aliquam quasi. Illo, quae doloremque. Ducimus accusamus temporibus a, id modi facilis, ipsam iusto ipsa nihil ipsum alias itaque. Minus repellendus placeat possimus molestias deserunt nisi molestiae est debitis libero explicabo adipisci ipsum facere, alias, rerum quos qui fuga. Facere.</p>
              <button type="button">En voir plus</button>
            </div>
          </li>
          <li className="frame" style={{ backgroundColor: 'green', padding: '4em' }}>
            <div style={{ position: 'relative', top: '8em', backgroundColor: 'darkgreen', padding: '2em', maxWidth: '20em' }}>
              <h2>Nom du rayon</h2>
              <button type="button">En voir plus</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </IndexLayout>
)

export default welcomePage
