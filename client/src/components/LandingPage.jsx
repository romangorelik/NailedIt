import React from 'react'
import { connect } from 'react-redux'

const LandingPageJSX = () => (
  <header className='header'>
    <div className="header__logo-box">
      <img src="https://img.icons8.com/officel/80/000000/nail-polish.png" className='header__logo'/>
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary heading-primary--top">Nailed It</h1>
      <h1 className="heading-primary heading-primary--sub">All in one salon experience</h1>
      <a href="#" className="btn btn--white">Get more information</a>
    </div>
  </header>
)

const LandingPage = connect(null)(LandingPageJSX)

export default LandingPage