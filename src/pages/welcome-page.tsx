import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize, padding } from 'polished'
import { relative } from 'path'
import IndexLayout from '../layouts'
import { heights, dimensions, colors } from '../styles/variables'

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
    <div>
      <ul>
        <li className="frame" style={{ backgroundColor: 'red', padding: '4em' }}>
          <div
            style={{
              position: 'relative',
              top: '8em',
              backgroundColor: 'darkred',
              borderRadius: '2em',
              padding: '2em',
              maxWidth: '40em',
              height: '25em'
            }}
          >
            <div style={{ marginLeft: '3em', marginTop: '5em' }}>
              <h2 style={{ color: 'white', textTransform: 'uppercase', fontSize: '3em' }}>Nom du rayon</h2>
              <p style={{ color: 'white' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta
                assumenda? Accusamus, molestias!
              </p>
              <button
                type="button"
                style={{
                  background: 'linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%)',
                  backgroundColor: '#b8e356',
                  borderRadius: '2em',
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontSize: '1em',
                  padding: '10px 20px',
                  textShadow: '0px 3px 0px #86ae47',
                  boxShadow: 'inset 0px 1px 0px 0px #d9fbbe',
                  border: 'none'
                }}
              >
                En voir plus
              </button>
            </div>
          </div>
        </li>

        <li className="frame" style={{ backgroundColor: 'blue', padding: '4em' }}>
          <div
            style={{
              position: 'relative',
              top: '8em',
              backgroundColor: 'darkblue',
              borderRadius: '2em',
              padding: '2em',
              maxWidth: '40em',
              height: '25em'
            }}
          >
            <div style={{ marginLeft: '3em', marginTop: '5em' }}>
              <h2 style={{ color: 'white', textTransform: 'uppercase', fontSize: '3em' }}>Nom du rayon</h2>
              <p style={{ color: 'white' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta
                assumenda? Accusamus, molestias!
              </p>
              <button
                type="button"
                style={{
                  background: 'linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%)',
                  backgroundColor: '#b8e356',
                  borderRadius: '2em',
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontSize: '1em',
                  padding: '10px 20px',
                  textShadow: '0px 3px 0px #86ae47',
                  boxShadow: 'inset 0px 1px 0px 0px #d9fbbe',
                  border: 'none'
                }}
              >
                En voir plus
              </button>
            </div>
          </div>
        </li>

        <li className="frame" style={{ backgroundColor: 'green', padding: '4em' }}>
          <div
            style={{
              position: 'relative',
              top: '8em',
              backgroundColor: 'darkgreen',
              borderRadius: '2em',
              padding: '2em',
              maxWidth: '40em',
              height: '25em'
            }}
          >
            <div style={{ marginLeft: '3em', marginTop: '5em' }}>
              <h2 style={{ color: 'white', textTransform: 'uppercase', fontSize: '3em' }}>Nom du rayon</h2>
              <p style={{ color: 'white' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci placeat ea numquam eaque cupiditate dicta
                assumenda? Accusamus, molestias!
              </p>
              <button
                type="button"
                style={{
                  background: 'linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%)',
                  backgroundColor: '#b8e356',
                  borderRadius: '2em',
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontSize: '1em',
                  padding: '10px 20px',
                  textShadow: '0px 3px 0px #86ae47',
                  boxShadow: 'inset 0px 1px 0px 0px #d9fbbe',
                  border: 'none'
                }}
              >
                En voir plus
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div className="footer">
      <p>Copyright 2021 - L'Antre des jeux</p>
    </div>
  </IndexLayout>
)

export default welcomePage
