import React from 'react'

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" id='navi-toggle' className="navigation__checkbox" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Nailed It</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benefits</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Packages</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Testimonials</a></li>
      </ul>
    </nav>
  </div>
)

export default Navigation