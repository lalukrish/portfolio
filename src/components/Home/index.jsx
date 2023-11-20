import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'l', ' ', 'k', 'r', 'i', 's', 'h', 'n', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    // return setTimeout(() => {
    setLetterClass('text-animate-hover')
    // })
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span
            className={`${letterClass} _14`}
            style={{ marginRight: '10px' }}
          >
            'm{' '}
          </span>
          <span
            style={{
              color: '#ffd700',
              fontWeight: 'bold',
              fontSize: 53,
              animation: 'rotateIn 1s linear both',
              animationDelay: '1.4s',
            }}
          >
            L
          </span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={25}
          />
        </h1>
        <h2>MERN Full Stack developer / JavaScript Expert </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
