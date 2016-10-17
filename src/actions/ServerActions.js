import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  gotRand(data) {
    AppDispatcher.dispatch({
      type: 'GOT_RAND',
      payload: { data }
    })
  }
}

export default ServerActions
