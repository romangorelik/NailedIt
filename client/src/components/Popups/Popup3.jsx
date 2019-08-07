import React from 'react'
import { connect } from 'react-redux'

class PopupJSX extends React.Component {
  render () {
    return (
      <div className="popup" id='popup3'>
        <div className="popup__content">
          <div className="popup__left">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Table Photo" className="popup__image"/>
            <img src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Table Photo" className="popup__image"/>
          </div>
          <div className="popup__right">
            <a href="#section-packages" className="popup__close">&times;</a>
            <h2 className="heading-secondary u-margin-bottom-small ">VIP</h2>
				    <h3 className="heading-tertiary u-margin-bottom-small ">Register your information now</h3>
          </div>
        </div>
      </div>
    )
  }
}

const Popup3 = connect(null)(PopupJSX)

export default Popup3