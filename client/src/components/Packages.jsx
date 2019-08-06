import React from 'react'
import { connect} from 'react-redux'
import c3 from '../../dist/c3.min.js'
import { addBasic, addPremium, addVip } from '../redux-state/actions/index'

const mapStateToProps = state => {
  return {
    basicMember: state.basic,
    premiumMember: state.premium,
    vipMember: state.vip
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBasic: basic => dispatch(addBasic(basic)),
    addPremium: premium => dispatch(addPremium(premium)),
    addVip: vip => dispatch(addVip(vip))
  }
}

class PackagesJSX extends React.Component {
  state = {
    basic: {
      list: ['1 Drink', '1 Service', '1 Stylist', '4 Day Appointment Notice', '1 Day Cancellation Notice'],
      price: '289'
    },
    premium: {
      list: ['3 Drinks', '2 Services', '2 Stylists', '1 Day Appointment Notice', '1 Day Cancellation Notice'],
      price: '489'
    },
    vip: {
      list: ['Unlimited Drinks', '5 Services', '3 Stylists', 'Same Day Appointment', 'Same Day Cancellation'],
      price: '869'
    },
    total: [30, 60, 10]
  }

  componentDidMount () {

    let total = this.props.basicMember + this.props.premiumMember + this.props.vipMember
    let basic = this.props.basicMember / total * 100
    let premium = this.props.premiumMember / total * 100
    let vip = this.props.vipMember / total * 100
    let totals = [basic, premium, vip]

    this.setState({
      total: totals
    }, () => {
      this.proportionGraph();
    })

  }

  addBasicMember = () => {
    this.props.addBasic();
  }

  addPremiumMember = () => {
    this.props.addPremium();
  }

  addVIPMember = () => {
    this.props.addVip();
  }

  proportionGraph = () => {
    c3.generate({
			bindto: this.graph1,
			data: {
        // iris data from R
        columns: [
            ['Users', this.state.total[0]],
        ],
        type : 'gauge',
      },
      size: {
        height: 240,
        width: 300
      },
      color: {
        pattern: ['#98FB98', '#eb9605', '#FFB6C1', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      legend: {
        show: false
      }
    });
    
    c3.generate({
			bindto: this.graph2,
			data: {
        // iris data from R
        columns: [
            ['Users', this.state.total[1]],
        ],
        type : 'gauge',
      },
      size: {
        height: 240,
        width: 300
      },
      color: {
        pattern: ['#98FB98', '#eb9605', '#FFB6C1', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      legend: {
        show: false
      }
    });
    
    c3.generate({
			bindto: this.graph3,
			data: {
        // iris data from R
        columns: [
            ['Users', this.state.total[2]],
        ],
        type : 'gauge',
      },
      size: {
        height: 240,
        width: 300
      },
      color: {
        pattern: ['#98FB98', '#eb9605', '#FFB6C1', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      legend: {
        show: false
      }
		});
  }

  render () {
    return (
      <section className='section-packages' id='packages'>
        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">
            Packages
          </h2>
        </div>

        <div className="u-text-center u-margin-top-huge">
          <div className="row">
            <div className="col-1-of-3">
              <div className="graph" ref={ graph1 => this.graph1 = graph1 }></div>
            </div>
            <div className="col-1-of-3">
              <div className="graph" ref={ graph2 => this.graph2 = graph2 }></div>
            </div>
            <div className="col-1-of-3">
              <div className="graph" ref={ graph3 => this.graph3 = graph3 }></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">Basic</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      {this.state.basic.list.map((service, index) => {
                        return (
                          <li key={index}>{service}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">${this.state.basic.price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white" onClick={this.addBasicMember}>Sign up now!</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">Premium</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      {this.state.premium.list.map((service, index) => {
                        return (
                          <li key={index}>{service}</li>
                        )
                      })}
                    </ul>
                  </div>

                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">${this.state.premium.price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white" onClick={this.addPremiumMember}>Sign up now!</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">VIP</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      {this.state.vip.list.map((service, index) => {
                        return (
                          <li key={index}>{service}</li>
                        )
                      })}
                    </ul>
                  </div>

                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">${this.state.vip.price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white" onClick={this.addVIPMember}>Sign up now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

const Packages = connect(mapStateToProps, mapDispatchToProps)(PackagesJSX)

export default Packages