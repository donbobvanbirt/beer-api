import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import BeerStore from '../stores/BeerStore'
// import BeerActions from '../actions/BeerActions'
// import { Segment , Label, Icon } from 'semantic-ui-react'

export default class Results extends Component {
  constructor() {
    super();
    // let defPos = MapStore.getDefaultPosition()
    this.state = {
      beer: BeerStore.getBeer()
    }
    // this.onDragEnd = this.onDragEnd.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    BeerStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    BeerStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      beer: BeerStore.getBeer()
    })
  }

  addToFavs(id) {
    console.log('id', id);
  }

  render() {
    console.log('this.state', this.state)
    let randomBeer = ''
    let { beer } = this.state;

    if(beer) {
      randomBeer = (
        <div>
          <h1>{beer.style.name}</h1>
          <h3>{beer.description}</h3>
          <button onClick={() => this.addToFavs(beer.id)}>Add to Favorites</button>
        </div>
      )
    }

    return (
      <div>
        {randomBeer}
      </div>
    )
  }

}
