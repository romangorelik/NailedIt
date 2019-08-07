import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class PopupJSX extends React.Component {

  addMembers = (e, user) => {
    e.preventDefault();
    axios.patch('/users/userCount', {
      userType: user
    })
      .catch(err => console.error(err))

    window.location.href='#section-packages'
  }

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

            <form action="#" className="form" onSubmit={(e) => this.addMembers(e, 'vip')}>
							<div className="form__group">
								<input type="text" id='name' placeholder='Full Name' required className="form__input"/>
								<label htmlFor="name" className="form__label">Full name</label>
							</div>
							<div className="form__group">
								<input type="email" id='email' placeholder='Email address' required className="form__input"/>
								<label htmlFor="email" className="form__label">Email address</label>
							</div>

							<div className="form__group">
								<button className="btn btn--pink">Next step &rarr;</button>
							</div>
						</form>
          </div>
        </div>
      </div>
    )
  }
}

const Popup3 = connect(null)(PopupJSX)

export default Popup3