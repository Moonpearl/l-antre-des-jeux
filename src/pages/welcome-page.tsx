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

const welcomePage = () => (
  <IndexLayout>
    <div className="container">
      {/* UNDERLAY BG */}
      <ul>
        <li className="ulImg one">
          <img src={Img01} alt="society" />
        </li>
        <li className="ulImg two">
          <img src={Img02} alt="children" />
        </li>
        <li className="ulImg three">
          <img src={Img03} alt="figurines" />
        </li>
        <li className="ulImg four">
          <img src={Img04} alt="roleplayer" />
        </li>
        <li className="ulImg five">
          <img src={Img05} alt="history" />
        </li>
        <li className="ulImg six">
          <img src={Img06} alt="cards" />
        </li>
        <li className="ulImg seven">
          <img src={Img07} alt="classic" />
        </li>
        <li className="ulImg height">
          <img src={Img08} alt="accessory" />
        </li>
      </ul>

      {/* FOOTER */}
      <ul>
        <div className="footer">
          <p>Copyright 2021 - L'Antre des jeux</p>
        </div>
      </ul>

      {/* OVERLAY */}
      <ul>
        <li className="olImg">
          <div className="olTitle">Jeux de société</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux d'enfants</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux de figurines</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux de roles</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux d'histoires</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux de cartes</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg">
          <div className="olTitle">Jeux classiques</div>
          <div className="olButton">En voir +</div>
        </li>
        <li className="olImg accessory">
          <div className="olTitle">Accessoires</div>
          <div className="olButton">En voir +</div>
        </li>
      </ul>
    </div>
  </IndexLayout>
)

export default welcomePage
