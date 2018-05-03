//Library code
function createStore (reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state. (getState)
  // 3. Listen to changes on the state. (subscribe)
  // 4. Update the state (dispatch)

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch,
  }
}

/*
Characteristics of a Pure Function
1) They always return the same result if the same arguments are passed in.
2) They depend only on the arguments passed into them.
3) Never produce any side effects.
*/

//App code

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type:TOGGLE_TODO,
    id,
  }
}

function addGoalAction (goal) {
  return {
    type:ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}
// Reducer function
    //return new state based on action
function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO :
    //adding todo item to state by concat
      return state.concat([action.todo])
    case REMOVE_TODO :
    //keeping all of the objects other than one with action.id
      return state.filter((todo) => todo.id !== action.id)
    case TOGGLE_TODO:
    //find object with action.id changing the complete value to opposite
      return state.map((todo) => todo.id !== action.id ? todo :
      Object.assign({}, todo, {complete:!todo.complete})
    )
      default:
        return state
  }
}

//reducer function
function goals (state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal])
    case REMOVE_GOAL :
      return state.filter((goal) => goal.id !== action.id)
    default:
      return state
  }
}

//create an object with our different state arrays
function app (state = {}, action) {
  return {
    todos:todos(state.todos, action),
    goals:goals(state.goals, action)
  }
}


const store = createStore(app)

const unsubuscribe = store.subscribe(() => {
console.log('The new STATE is ', store.getState())
})

store.dispatch(addTodoAction({
    id: 1,
    name: 'Wash the car',
    complete: false,
  })

store.dispatch(addTodoAction({
  todo: {
    id: 0,
    name: 'Walk the dog',
    complete: false,
  }
}))

store.dispatch(addTodoAction({
  todo: {
    id: 2,
    name: 'Go to the gym',
    complete: true,
  }
}))

store.dispatch(removeTodoAction(1))

store.dispatch(toggleTodoAction(0))

store.dispatch(addGoalAction({goal: {
    id: 0,
    name: 'Learn Redux'
  }))

store.dispatch(addGoalAction(type: 'ADD_GOAL',
  goal: {
    id: 1,
    name: 'Lose 20 pounds'
  }))


store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
})

store.dispatch(removeTodoAction(0))

