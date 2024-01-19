import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../Contexts'
import Header from '../Header'
import './index.css'

class Profile extends Component {
  requestStatus = {
    progress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

  state = {
    urlRequestStatus: this.requestStatus.progress,
    urlResult: [],
  }

  componentDidMount() {
    this.getMyProfileResults()
  }

  getMyProfileResults = async () => {
    this.setState({urlRequestStatus: this.requestStatus.progress})
    const url = `https://apis.ccbp.in/insta-share/my-profile`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
    } else {
      this.setState({urlRequestStatus: this.requestStatus.failure})
    }
  }

  getMyProfileView = activeTheme => {
    const {urlRequestStatus} = this.state
    switch (urlRequestStatus) {
      case this.requestStatus.progress:
        return (
          <div className="loader-container">
            <Loader type="TailSpin" color="#4094ef" />
          </div>
        )
      case this.requestStatus.failure:
        return (
          <div className="home-failure-container">
            <img
              src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1705664465/alert-triangle_e49eqv.png"
              alt="failure"
              className="failure-image"
            />
            <h1>Something went wrong. Please try again</h1>
            <button
              type="button"
              onClick={this.getMyProfileResults}
              className="try-again-button"
            >
              Try Again
            </button>
          </div>
        )
      case this.requestStatus.success:
        return null
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <div>
              <Header />
              <div>{this.getMyProfileView(activeTheme)}</div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Profile
