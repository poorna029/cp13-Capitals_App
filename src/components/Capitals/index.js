import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {name: 'India', value: 'NEW_DELHI'}

  hai = e => {
    const v = e.target.value

    const capital = countryAndCapitalsList.filter(x => v === x.id)
    console.log(capital[0].country)
    this.setState({name: capital[0].country, value: capital[0].id})
  }

  render() {
    const {name, value} = this.state

    return (
      <div className="main">
        <div className="sub">
          <h1>Countries And Capitals</h1>
          <div>
            <select className="opt" id="sl" onChange={this.hai} value={value}>
              {countryAndCapitalsList.map(e => (
                <option value={e.id} key={e.id}>
                  {e.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="sl" className="ma">
              is capital of which country?
            </label>
          </div>
          <div className="A">
            <p>{name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
