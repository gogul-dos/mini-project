import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaSearch, FaMoon, FaSun} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import ThemeContext from '../../Contexts'
import './index.css'

class Header extends Component {
  state = {searchInput: '', isPortraitMenuOpen: false}

  hamburgerButtonClicked = () => {
    this.setState(prevState => ({
      isPortraitMenuOpen: !prevState.isPortraitMenuOpen,
    }))
  }

  logoutButtonClicked = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  inputChanged = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, isPortraitMenuOpen} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            activeTheme,
            currentTab,
            changeTheme,
            changeCurrentTab,
            changeSearchInput,
          } = value
          const themeButtonClicked = () => {
            changeTheme()
          }
          const backgroundColor =
            activeTheme === 'Dark'
              ? 'dark-navbar-container'
              : 'light-navbar-container'
          const fontColor = activeTheme === 'Dark' ? '#ffffff' : '#000000'
          return (
            <nav className={`${backgroundColor}`}>
              <div className="navbar-container-landscape">
                <Link
                  to="/"
                  onClick={() => changeCurrentTab('Home')}
                  className={`link-item ${backgroundColor}`}
                >
                  <div className="navbar-left-container">
                    <img
                      src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1705640022/logo_oaxiab.png"
                      alt="website logo"
                      className="website-logo-image"
                    />
                    <h1>Insta Share</h1>{' '}
                  </div>
                </Link>
                <div className="navbar-right-container">
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <input
                      type="search"
                      className="search-element"
                      onChange={this.inputChanged}
                      placeholder="Search Caption"
                    />
                    <Link to="/search">
                      <button
                        type="button"
                        label="search"
                        className="search-icon-container"
                        onClick={() => {
                          changeCurrentTab('Search')
                          changeSearchInput(searchInput)
                        }}
                      >
                        <FaSearch style={{height: '15px', width: '15px'}} />
                      </button>
                    </Link>
                  </div>
                  <button
                    onClick={themeButtonClicked}
                    label="themeButton"
                    type="button"
                    className="theme-change-button"
                  >
                    {activeTheme === 'Light' && (
                      <FaMoon style={{height: '22px', width: 'auto'}} />
                    )}
                    {activeTheme === 'Dark' && (
                      <FaSun
                        style={{height: '22px', width: 'auto', color: 'White'}}
                      />
                    )}
                  </button>
                  <Link
                    to="/"
                    style={{
                      color: currentTab === 'Home' ? '#4094ef' : '',
                      fontWeight: currentTab === 'Home' ? 'Bold' : '',
                    }}
                    className={`link-item ${backgroundColor}`}
                    onClick={() => changeCurrentTab('Home')}
                  >
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    style={{
                      color: currentTab === 'Profile' ? '#4094ef' : '',
                      fontWeight: currentTab === 'Profile' ? 'Bold' : '',
                    }}
                    className={`link-item ${backgroundColor}`}
                    onClick={() => changeCurrentTab('Profile')}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={this.logoutButtonClicked}
                    type="button"
                    className="logout-button"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="navbar-container-portrait">
                <Link
                  to="/"
                  onClick={() => changeCurrentTab('Home')}
                  className={`link-item ${backgroundColor}`}
                >
                  <div className="navbar-left-container">
                    <img
                      src="https://res.cloudinary.com/djfbwkdh3/image/upload/v1705640022/logo_oaxiab.png"
                      alt="website logo"
                      className="website-logo-image"
                    />
                    <h1>Insta Share</h1>{' '}
                  </div>
                </Link>
                <button
                  label="hamburger"
                  className="hamburger-button"
                  type="button"
                  onClick={this.hamburgerButtonClicked}
                >
                  <GiHamburgerMenu
                    style={{color: fontColor, height: '30px', width: '30px'}}
                  />
                </button>
              </div>
              {isPortraitMenuOpen && (
                <div className="portrait-links-container">
                  <Link
                    to="/search"
                    onClick={() => {
                      changeCurrentTab('Search')
                      this.hamburgerButtonClicked()
                    }}
                    style={{
                      color: currentTab === 'Search' ? '#4094ef' : '',
                      fontWeight: currentTab === 'Search' ? 'Bold' : '',
                    }}
                    className={`link-item ${backgroundColor}`}
                  >
                    Search
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      changeCurrentTab('Home')
                      this.hamburgerButtonClicked()
                    }}
                    style={{
                      color: currentTab === 'Home' ? '#4094ef' : '',
                      fontWeight: currentTab === 'Home' ? 'Bold' : '',
                    }}
                    className={`link-item ${backgroundColor}`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => {
                      changeCurrentTab('Profile')
                      this.hamburgerButtonClicked()
                    }}
                    style={{
                      color: currentTab === 'Profile' ? '#4094ef' : '',
                      fontWeight: currentTab === 'Profile' ? 'Bold' : '',
                    }}
                    className={`link-item ${backgroundColor}`}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      this.logoutButtonClicked()
                      this.hamburgerButtonClicked()
                    }}
                    type="button"
                    className="logout-button"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => {
                      themeButtonClicked()
                      this.hamburgerButtonClicked()
                    }}
                    label="themeButton"
                    type="button"
                    className="theme-change-button"
                  >
                    {activeTheme === 'Light' && (
                      <FaMoon style={{height: '22px', width: 'auto'}} />
                    )}
                    {activeTheme === 'Dark' && (
                      <FaSun
                        style={{
                          height: '22px',
                          width: 'auto',
                          color: 'White',
                        }}
                      />
                    )}
                  </button>
                </div>
              )}
              <hr />
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
