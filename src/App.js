import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    // const {showContent} = this.state
    // this.setState({showContent: !showContent})
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    // const {showLeftNavbar} = this.state
    // this.setState({showLeftNavbar: !showLeftNavbar})
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    // const {showRightNavbar} = this.state
    // this.setState({showRightNavbar: !showRightNavbar})
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
