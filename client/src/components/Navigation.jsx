import React from 'react'

class Navigation extends React.Component {

  closeNav = () => {
    document.getElementById("navi-toggle").checked = false;
  }
  render () {
    return (
      <div className="navigation">
        <input type="checkbox" id='navi-toggle' className="navigation__checkbox" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#section-about" className="navigation__link" onClick={this.closeNav}><span>01</span>About Nailed It</a></li>
            <li className="navigation__item"><a href="#section-features" className="navigation__link" onClick={this.closeNav}><span>02</span>Your benefits</a></li>
            <li className="navigation__item"><a href="#section-packages" className="navigation__link" onClick={this.closeNav}><span>03</span>Packages</a></li>
            <li className="navigation__item"><a href="#section-testimonial" className="navigation__link" onClick={this.closeNav}><span>04</span>Testimonials</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
  

export default Navigation