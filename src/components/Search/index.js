import {Component} from 'react'
import ThemeContext from '../../Contexts'
import Header from '../Header'
import './index.css'

class Search extends Component {
  state = {}

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <div>
              <Header />
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Search
