import React from 'react'
import { connect } from 'react-redux'
import store from '../redux-state/store'

import LandingPage from './LandingPage.jsx'
import AboutUs from './AboutUs.jsx'
import Features from './Features.jsx';
import Packages from './Packages.jsx';
import Testimonial from './Testimonials.jsx';
import Footer from './Footer.jsx';
import Navigation from './Navigation.jsx';

window.store = store

class AppInformation extends React.Component {
  state = {

  }

  render () {
    return (
      <div>
        <Navigation />
        <LandingPage />
        <AboutUs />
        <Features />
        <Packages />
        <Testimonial />
        <Footer />
      </div>
    )
  }
}

const App = connect(null)(AppInformation)

export default App