export const initialState = {
  tasks: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now()
    }
  ]
};

export const taskReducer = (state, action) => {
  console.log("IN REDUCER", state);
  switch (action.type) {
    case "ADD_TODO":
      console.log("ADDTODO ACTION:", action);
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };

    // return {
    //     ...state,
    //     item: action.payload,
    // }
    case "TOGGLE_COMPLETED":
      // console.log('IN REDUCER', state)
      return {
        ...state,
        tasks: state.tasks.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : state
        )
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(item => !item.completed)
      };

    default:
      return state;
  }
};
