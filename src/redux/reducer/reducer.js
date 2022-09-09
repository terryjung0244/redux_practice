
const initState = {
  count: 0
}

function reducer(state = initState, action) {
  console.log(action)

  switch(action.type) {
    case 'INCREMENT': 
      return {...state, count: state.count + 1}
    default:
      return { ...state };
  }
}

export default reducer