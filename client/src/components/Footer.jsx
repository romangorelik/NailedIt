import React from 'react'
import { connect } from 'react-redux'

const FooterJSX = () => (
  <footer className='footer'>
    <div className="footer__logo-box">
      <img src="https://img.icons8.com/officel/80/000000/nail-polish.png" alt="" className="footer__logo"/>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
        </div>
      </div>
      <div className="col-1-of-2">
				<p className="footer__copyright">
					Built by <a href="https://github.com/romangorelik" target='_blank' className="footer__link">Roman Gorelik</a> for CSS and Sass practice. Copyright &copy; by Roman Gorelik. Practicing using React, Redux, MongoDB, NodeJS, Express, Sass, C3, and more. Design by Jonas Schmedtmann.
				</p>
			</div>
    </div>
  </footer>
)

const Footer = connect(null)(FooterJSX)

export default Footer