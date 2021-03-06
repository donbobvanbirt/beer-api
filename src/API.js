import ServerActions from './actions/ServerActions'
import { get, post } from 'axios'

const API = {
  getRand() {
    // console.log('in API.getRand');
    get('/api/random')
    .then(res => {
      let { data } = res.data;
      // console.log('data in API:', data)
      ServerActions.gotRand(data);
    })
    .catch(console.error)
  },

  favorite(id) {
    post('/api/favorite', {
      id
    })
  }
}

export default API
