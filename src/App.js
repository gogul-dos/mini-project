import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Search from './components/Search'
import ThemeContext from './Contexts'
import './App.css'

class App extends Component {
  state = {activeTheme: 'Light', currentTab: 'Home', searchInput: ''}

  changeTheme = () => {
    const {activeTheme} = this.state
    let newTheme
    if (activeTheme === 'Dark') {
      newTheme = 'Light'
    } else {
      newTheme = 'Dark'
    }
    this.setState({activeTheme: newTheme})
  }

  changeCurrentTab = newTab => {
    this.setState({currentTab: newTab})
  }

  changeSearchInput = searchValue => {
    this.setState({searchInput: searchValue})
  }

  render() {
    const {activeTheme, currentTab, searchInput} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          currentTab,
          searchInput,
          changeTheme: this.changeTheme,
          changeCurrentTab: this.changeCurrentTab,
          changeSearchInput: this.changeSearchInput,
        }}
      >
        <Switch>
          <Route exact path="/Login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/search" component={Search} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
