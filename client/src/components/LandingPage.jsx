import React from 'react'
import { connect } from 'react-redux'


class LandingPageJSX extends React.Component {

  componentDidMount () {
    this.removeHash();
  }

  removeHash = () => { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
  }

  render () {
    return (
      <header className='header'>
        <div className="header__logo-box">
          <img src="https://img.icons8.com/officel/80/000000/nail-polish.png" className='header__logo' />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary heading-primary--top">Nailed It</h1>
          <h1 className="heading-primary heading-primary--sub">All in one salon experience</h1>
          <a href="#features" className="btn btn--white">Get more information</a>
        </div>
      </header>
    )
  }
}

const LandingPage = connect(null)(LandingPageJSX)

export default LandingPage