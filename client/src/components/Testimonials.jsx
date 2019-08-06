import React from 'react'
import { connect } from 'react-redux'

class TestimonialsJSX extends React.Component {
  render () {
    return (
      <section className='section-testimonial'>

        <div className="bg-video">
				  <video className="bg-video__content" autoPlay muted loop>
					  <source src='../videos/video.mp4' type='video/mp4'/>
					  Your browser is not supported!  
				  </video>
			  </div>

        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">Hear from our customers</h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Person 1" className="story__image"/>
              <figcaption className="story__caption">Ana Vasquez</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">Best service on the market</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia, quibusdam laborum praesentium quia suscipit harum maiores voluptates blanditiis. Commodi, hic. Consequatur in iusto tempora, enim voluptates adipisci incidunt nesciunt?</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Person 1" className="story__image"/>
              <figcaption className="story__caption">Hannah Godwin</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">They really do have the best stylists</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia, quibusdam laborum praesentium quia suscipit harum maiores voluptates blanditiis. Commodi, hic. Consequatur in iusto tempora, enim voluptates adipisci incidunt nesciunt?</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const Testimonial = connect(null)(TestimonialsJSX)

export default Testimonial