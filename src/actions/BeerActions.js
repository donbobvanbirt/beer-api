import API from '../API'

const BeerActions = {
  getRand() {
    API.getRand();
  },

  favorite(id) {
    API.favorite(id);
  }
}

export default BeerActions;
