const initialState = {
    // increment: 0,
    // decrement: 0
    value:0,
    hari:'Harish Redux is working'
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
       // console.log('+++++++++++++++')
       // console.log(state.value)
        return Object.assign(state, {
          value: state.value + 1
        })
      case 'DECREMENT':
      //console.log(state.value)
        return Object.assign(state, {
          value: state.value - 1
        })
  
      default:
        return state
  
    }
  }
  