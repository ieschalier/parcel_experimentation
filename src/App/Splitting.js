import React from 'react'

class Splitting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Component: null,
    }
  }

  async componentDidMount() {
    this.props.module.then((Component) => {
      this.setState({ Component })
    })
  }

  render() {
    const { module, ...props } = this.props
    const { Component } = this.state

    return Component && <Component.default {...props} />
  }
}

export default Splitting
