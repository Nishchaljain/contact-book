import { ADD_CONTACT, EDIT_CONTACT } from "./ContactActions";

const initialState = [
  {
    id: 1,
    name: "Nishchal Jain",
    email: "nishchaljain786@gmail.com",
    number: 1234567890,
  },
  {
    id: 2,
    name: "Divya Jain",
    email: "divyajain417@gmail.com",
    number: 3456782341,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      // return {
      //   ...state,
      //   contacts: action.payload,
      // };
      state = [...state, action.payload];
      return state;
    case EDIT_CONTACT:
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
