class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}


const contactReducer = (prevState, action) => {
  if (action.type === "UPDATE_CONTACT") {
    return [...prevState, action.payload];
  }
};

const combineReducer = (state, action) => {
  return {
    contacts: contactReducer(state.contacts, action),
  };
};

const initialState = { contacts: [], user: [] };

const store = new Store(combineReducer, initialState);

store.dispatch({
  type: "UPDATE_CONTACT",
  payload: {
    name: "Charles",
    phone: "123456890",
  },
});
store.dispatch({
  type: "UPDATE_CONTACT",
  payload: { name: "Jordan H", phone: "1234567890" },
});

// console.log(store.getState());

export default store;
