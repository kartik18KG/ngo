const initState = {
  err: null
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESSFULLY_APPROVED":
      console.log("successfully approved");
      return {
        ...state
      };
    case "ERROR_APPROVING":
      return {
        ...state,
        err: action.err.message
      };
    case "SUCCESSFULLY_DISAPPROVED":
      return {
        ...state,
        err: null
      };
    case "ERROR_DISAPPROVING":
      return {
        ...state,
        err: action.err.message
      };
    case "DELETE_SUCCESS":
      return {
        ...state
      };
    case "DELETE_ERROR":
      return {
        ...state,
        err: action.err.message
      };
    case "SUBSCRIBE_SUCCESS":
      return {
        ...state
      };

    case "SUBSCRIBE_ERROR":
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export default adminReducer;
