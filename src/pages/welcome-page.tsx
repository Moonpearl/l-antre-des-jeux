import * as React from 'react'
import IndexLayout from '../layouts'

import './welcome-page.css'
import './reset.css'

const welcomePage = () => (
  <IndexLayout>
    <div className="container">
      {/* UNDERLAY BG */}
      <ul>
        <li>
          <div className="ulImg one">Img1</div>
        </li>
        <li>
          <div className="ulImg two">Img2</div>
        </li>
        <li>
          <div className="ulImg three">Img3</div>
        </li>
        <li>
          <div className="ulImg four">Img4</div>
        </li>
        <li>
          <div className="ulImg five">Img5</div>
        </li>
        <li>
          <div className="ulImg six">Img6</div>
        </li>
        <li>
          <div className="ulImg seven">Img7</div>
        </li>
        <li>
          <div className="ulImg height">Img8</div>
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
