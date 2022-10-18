import { RootState } from "../store";
import { SortValues } from "../../models/SortValues";

export const selectUser = (state: RootState) => state.contacts.user;
export const selectFirstClickCount = (state: RootState) => state.contacts.firstClickCount;
export const selectLastClickCount = (state: RootState) => state.contacts.lastClickCount;
export const selectEditingContact = (contactIndex: number) => (state: RootState) => state.contacts.contacts.find(contact => contact.id === Number(contactIndex));
export const selectUpdatedContact = (state: RootState) => state.contacts.updatedContact;
export const selectContacts =
  (sortStatus: SortValues) => (state: RootState) => {

    // ======= Search/filter through contacts ========= 
    if (state.contacts.contactSearch !== '') {
      return state.contacts.contacts.filter((contact) => {
        return (
          contact.firstName?.toLowerCase().includes(state.contacts.contactSearch.toLowerCase()) || 
          contact.lastName?.toLowerCase().includes(state.contacts.contactSearch.toLowerCase()) || 
          contact.phone?.toLowerCase().includes(state.contacts.contactSearch.toLowerCase()) || 
          contact.email?.toLowerCase().includes(state.contacts.contactSearch.toLowerCase())
        ) 
      })
    }


    // ============= logic with select element ===============
    // // console.log({ sortStatus });
    // if (sortStatus === SortValues.FIRST_ASC) {
    //   // console.log("sort asc by first name");
    //   return [...state.contacts.contacts].sort((a, b) => {
    //     const nameA = a.firstName.toLowerCase();
    //     const nameB = b.firstName.toLowerCase();
    //     if (nameA < nameB) return -1;
    //     if (nameA > nameB) return 1;
    //     return 0;
    //   });
    // }
    // if (sortStatus === SortValues.FIRST_DESC) {
    //   // console.log("sort desc by first name");
    //   return [...state.contacts.contacts].sort((a, b) => {
    //     const nameA = a.firstName.toLowerCase();
    //     const nameB = b.firstName.toLowerCase();
    //     if (nameA > nameB) return -1;
    //     if (nameA < nameB) return 1;
    //     return 0;
    //   });
    // }
    // if (sortStatus === SortValues.LAST_ASC) {
    //   return [...state.contacts.contacts].sort((a, b) => {
    //     const nameA = a.lastName.toLowerCase();
    //     const nameB = b.lastName.toLowerCase();
    //     if (nameA < nameB) return -1;
    //     if (nameA > nameB) return 1;
    //     return 0;
    //   });
    // }
    // if (sortStatus === SortValues.LAST_DESC) {
      //   return [...state.contacts.contacts].sort((a, b) => {
        //     const nameA = a.lastName.toLowerCase();
        //     const nameB = b.lastName.toLowerCase();
        //     if (nameA > nameB) return -1;
        //     if (nameA < nameB) return 1;
        //     return 0;
        //   });
        // }
        
    // return [...state.contacts.contacts].sort((a, b) => {
    //   const nameA = a.firstName.toLowerCase();
    //   const nameB = b.firstName.toLowerCase();
    //   if (nameA < nameB) return -1;
    //   if (nameA > nameB) return 1;
    //   return 0;
    // });



    // ================= logic with click count of table title ===========================
    if (state.contacts.firstClickCount === 1) {
        // console.log("sort asc by first name");
        return [...state.contacts.contacts].sort((a, b) => {
          const nameA = a.firstName?.toLowerCase();
          const nameB = b.firstName?.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      }
      if (state.contacts.firstClickCount === 2) {
        // console.log("sort desc by first name");
        return [...state.contacts.contacts].sort((a, b) => {
          const nameA = a.firstName?.toLowerCase();
          const nameB = b.firstName?.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
      }
      if (state.contacts.lastClickCount === 1) {
        // console.log("sort asc by last name");
        return [...state.contacts.contacts].sort((a, b) => {
          const nameA = a.lastName?.toLowerCase();
          const nameB = b.lastName?.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      }
      if (state.contacts.lastClickCount === 2) {
        // console.log("sort desc by last name");
        return [...state.contacts.contacts].sort((a, b) => {
          const nameA = a.lastName?.toLowerCase();
          const nameB = b.lastName?.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
      }


      

      // default return statement
      return state.contacts.contacts
  };
export const selectIsLoggedIn = (state: RootState) => state.contacts.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.contacts.loading;
export const selectSortStatus = (state: RootState) => state.contacts.sortStatus;
export const selectNewContact = (state: RootState) => state.contacts.newContact;

