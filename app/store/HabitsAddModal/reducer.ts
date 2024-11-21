const initialState = {
  frequency: false,
};

const CountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "frequencyChangeTrue":
      return {
        ...state,
        frequency: true,
      };
    case "frequencyChangeFalse":
      return {
        ...state,
        frequency: false,
      };
    default:
      return state;
  }
};

export default CountReducer;
