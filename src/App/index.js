import React from 'react'
import Splitting from './Splitting'
import Header from './Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  componentDidMount() {
    console.log('hello', this.state.color)
  }

  handleClick = () => {
    this.setState({ color: this.state.color === 'red' ? 'green' : 'red' })
  }

  render() {
    const color = this.state.color === 'red' ? 'green' : 'red'
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}>{color}</button>
        <Splitting module={import('./Module')} color={color} />
      </div>
    )
  }
}

export default App
