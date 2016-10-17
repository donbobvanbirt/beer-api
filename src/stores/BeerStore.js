import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let randBeer = '';

class BeerStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'GOT_RAND':
        randBeer = action.payload.data;
        console.log('randBeer', randBeer)
        this.emit('CHANGE');
        break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb)
  }

  getBeer(){
    return randBeer;
  }

}

export default new BeerStore;
