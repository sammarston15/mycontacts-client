import { createReducer } from "@reduxjs/toolkit";
import { Contact } from "../../models/interfaces/contact";
import { User } from "../../models/interfaces/user";
import * as ContactActions from "./actions";
import { SortValues } from "../../models/SortValues";

interface ContactsState {
  contacts: Contact[];
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  sortStatus: SortValues;
  firstClickCount: number;
  lastClickCount: number;
  contactSearch: string;
  newContact: Contact;
  editingContact: Contact;
  updatedContact: Contact;
}

const initialState: ContactsState = {
  contacts: [],
  user: {} as User,
  isLoggedIn: false,
  loading: false,
  sortStatus: SortValues.FIRST_ASC,
  firstClickCount: 0,
  lastClickCount: 0,
  contactSearch: "",
  newContact: {} as Contact,
  editingContact: {} as Contact,
  updatedContact: {} as Contact
};

const contactReducer = createReducer(initialState, (contacts) => {
  contacts
    .addCase(ContactActions.getAllContacts.pending, (state: ContactsState) => ({
      ...state,
      loading: true,
    }))
    .addCase(
      ContactActions.getAllContacts.fulfilled,
      (state: ContactsState, { payload }) => ({
        ...state,
        loading: false,
        contacts: payload.data,
      })
    )
    .addCase(
      ContactActions.getAllContacts.rejected,
      (state: ContactsState, { error }) => {
        alert(`${error.stack}`);
      }
    )
    .addCase(
      ContactActions.setNewLoggedIn,
      (state: ContactsState, { payload }) => ({
        ...state,
        isLoggedIn: payload,
      })
    )
    .addCase(
      ContactActions.setNewUser,
      (state: ContactsState, { payload }) => ({
        ...state,
        user: payload,
      })
    )
    .addCase(
      ContactActions.setSortStatus,
      (state: ContactsState, { payload }) => ({
        ...state,
        sortStatus: payload,
      })
    )
    .addCase(
      ContactActions.setFirstClickCount,
      (state: ContactsState, { payload }) => ({
        ...state,
        firstClickCount: payload,
      })
    )
    .addCase(
      ContactActions.setLastClickCount,
      (state: ContactsState, { payload }) => ({
        ...state,
        lastClickCount: payload,
      })
    )
    .addCase(
      ContactActions.setContactSearch,
      (state: ContactsState, { payload }) => ({
        ...state,
        contactSearch: payload,
      })
    )
    .addCase(ContactActions.saveNewContact.pending, (state: ContactsState) => ({
      ...state,
      loading: true,
    }))
    .addCase(
      ContactActions.saveNewContact.fulfilled,
      (state: ContactsState, { payload }) => ({
        ...state,
        loading: false,
        newContact: {} as Contact,
        contacts: payload.data,
      })
    )
    .addCase(
      ContactActions.saveNewContact.rejected,
      (state: ContactsState, { error }) => {
        alert(`${error.stack}`);
      }
    )
    .addCase(ContactActions.saveEditedContact.pending, (state: ContactsState) => ({
      ...state,
      loading: true,
    }))
    .addCase(
      ContactActions.saveEditedContact.fulfilled,
      (state: ContactsState, { payload }) => ({
        ...state,
        loading: false,
        editingContact: {} as Contact,
        updatedContact: {} as Contact,
        contacts: payload.data,
      })
    )
    .addCase(
      ContactActions.saveEditedContact.rejected,
      (state: ContactsState, { error }) => {
        alert(`${error.stack}`);
      }
    )
    .addCase(ContactActions.deleteContact.pending, (state: ContactsState) => ({
      ...state,
      loading: true,
    }))
    .addCase(
      ContactActions.deleteContact.fulfilled,
      (state: ContactsState, { payload }) => ({
        ...state,
        loading: false,
        editingContact: {} as Contact,
      })
    )
    .addCase(
      ContactActions.deleteContact.rejected,
      (state: ContactsState, { error }) => {
        console.log(`${error.stack}`);
      }
    )
    .addCase(
      ContactActions.setNewContact,
      (state: ContactsState, { payload }) => ({
        ...state,
        newContact: payload,
      })
    )
    .addCase(
      ContactActions.setEditingContact,
      (state: ContactsState, { payload }) => ({
        ...state,
        editingContact: payload,
      })
    )
    .addCase(
      ContactActions.setUpdatedContact,
      (state: ContactsState, { payload }) => ({
        ...state,
        updatedContact: payload,
      })
    )
    .addDefaultCase((state: ContactsState) => state);
});

export default contactReducer;
