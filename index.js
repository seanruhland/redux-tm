function createStore () {
  //the store should have four parts
  //1. The state
  //2. Get the state.
  //3. Listen to changes on the state.
  //4. Update the state

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {

  }

  return {
    getState,
    subscribe
  }
}
