// import { Menu, Segment, Label, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
// import SearchBar from './SearchBar'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname
    return (
      <div>
        <h1>beer</h1>
        {this.props.children}
      </div>
    )
  }
}
