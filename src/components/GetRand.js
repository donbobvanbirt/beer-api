import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import BeerActions from '../actions/BeerActions'
import Results from './Results'
// import { Segment , Label, Icon } from 'semantic-ui-react'

export default class GetRand extends Component {
  constructor() {
    super();
    // let defPos = MapStore.getDefaultPosition()
    // this.state = {
    //   lat: defPos.lat,
    //   lng: defPos.lng
    // }
    // this.onDragEnd = this.onDragEnd.bind(this);
    // this._onChange = this._onChange.bind(this);
  }

  getRand() {
    console.log('random button');
    BeerActions.getRand();
  }

  render() {
    return (
      <div>
        <button onClick={this.getRand}>Get Random Beer</button>
        <Results />
      </div>
    )
  }

}
