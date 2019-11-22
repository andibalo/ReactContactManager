import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACTS } from "./constants";

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACTS,
    payload: contact
  };
};
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
