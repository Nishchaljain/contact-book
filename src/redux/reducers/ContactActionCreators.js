import { ADD_CONTACT, EDIT_CONTACT } from "./ContactActions";

export const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

export const editContact = (data) => {
  return {
    type: EDIT_CONTACT,
    payload: data,
  };
};
