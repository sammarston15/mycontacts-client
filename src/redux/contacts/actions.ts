import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/user";
import { Contact } from "../../models/interfaces/contact";
// import { SortValues } from '../../models/SortValues'
import axios from "axios";
// import { create } from "domain";

const BASE_URL = "https://mycontacts-api.onrender.com"

export const getAllContacts = createAsyncThunk<any>(
  "CONTACTS/GET_ALL_CONTACTS",
  () => axios.get(`${BASE_URL}/api/contacts`)
);
export const saveNewContact = createAsyncThunk<any, Contact>(
  "CONTACTS/SAVE_NEW_CONTACT",
  (data) => axios.post(`${BASE_URL}/api/contacts`, data)
);
export const saveEditedContact = createAsyncThunk<any, any>('CONTACTS/SAVE_EDITED_CONTACT', (data) => axios.put(`${BASE_URL}/api/contacts`, data))
export const deleteContact = createAsyncThunk<any, any>('CONTACTS/DELETE_CONTACT', (data) => {
  axios.put(`${BASE_URL}/api/contacts/${data.editingContact.id}`, data)
})
export const setNewContact = createAction<any>("CONTACTS/SET_NEW_CONTACT");
export const setEditingContact = createAction<any>('CONTACTS/SET_EDITING_CONTACT');
export const setUpdatedContact = createAction<Contact>('CONTACTS/SET_UPDATED_CONTACT');
export const setNewLoggedIn = createAction<boolean>("SET_NEW_LOGGEDIN");
export const setNewUser = createAction<User>("SET_NEW_USER");
export const setSortStatus = createAction<any>("SET_SORT_STATUS");
export const setFirstClickCount = createAction<number>("SET_FIRST_CLICK_COUNT");
export const setLastClickCount = createAction<number>("SET_LAST_CLICK_COUNT");
export const setContactSearch = createAction<string>("SET_CONTACT_SEARCH");
