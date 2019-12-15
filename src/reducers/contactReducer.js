import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DELETE_CONTACT
} from "../actions/constants";

import uuid from "uuid";

const initialState = {
  contacts: [
    {
      id: uuid(),
      name: "Andi Usman Balo",
      email: "andibalo213@gmail.com",
      phone: "902190210"
    },
    {
      id: uuid(),
      name: "Andi Usman Balo",
      email: "andibalo213@gmail.com",
      phone: "902190210"
    },
    {
      id: uuid(),
      name: "Andi Usman Balo",
      email: "andiba3@gmail.com",
      phone: "902190210"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
}
