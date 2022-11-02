import { actionTypes } from "../../types/reducerTypes";

const Reducer = (state: object, action: actionTypes): any => {
  switch (action.type) {
    case 'flip':
      return action.payload.updated;
    default:
      return (
        {
          ...state,
          count: 0,
          flipHorizontal: false,
          flipVertical: false
        }
      );
  }
}
export default Reducer;