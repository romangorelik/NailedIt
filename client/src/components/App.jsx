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
import Popup1 from './Popups/Popup1.jsx';
import Popup2 from './Popups/Popup2.jsx';
import Popup3 from './Popups/Popup3.jsx';

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
        <Popup1 />
        <Popup2 />
        <Popup3 />
      </div>
    )
  }
}

const App = connect(null)(AppInformation)

export default App