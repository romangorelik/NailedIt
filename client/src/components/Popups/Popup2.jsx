import React from 'react'
import { connect } from 'react-redux'

class PopupJSX extends React.Component {
  render () {
    return (
      <div className="popup" id='popup2'>
        <div className="popup__content">
          <div className="popup__left">
            <img src="https://images.unsplash.com/photo-1527799595389-46c4c3aa0df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Table Photo" className="popup__image"/>
            <img src="https://images.unsplash.com/photo-1521012012373-6a85bade18da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Table Photo" className="popup__image"/>
          </div>
          <div className="popup__right">
            <a href="#section-packages" className="popup__close">&times;</a>
            <h2 className="heading-secondary u-margin-bottom-small ">Premium</h2>
				    <h3 className="heading-tertiary u-margin-bottom-small ">Register your information now</h3>
          </div>
        </div>
      </div>
    )
  }
}

const Popup2 = connect(null)(PopupJSX)

export default Popup2