import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts, setFirstClickCount, setLastClickCount, /* setSortStatus */ } from "../../redux/contacts/actions";
import {
  selectFirstClickCount,
  selectLastClickCount,
  selectContacts,
  selectIsLoading,
  selectSortStatus,
} from "../../redux/contacts/selectors";
import styles from "./home.module.scss";
import { useNavigate } from 'react-router-dom'
// import { SortValues } from "../../models/SortValues";

const ContactsList = () => {
  let navigate = useNavigate();

  // DISPATCH HOOK
  const dispatch = useDispatch();

  // SELECTORS
  const loading = useSelector(selectIsLoading);
  const sortStatus = useSelector(selectSortStatus);
  const contacts = useSelector(selectContacts(sortStatus));
  const firstClickCount = useSelector(selectFirstClickCount)
  const lastClickCount = useSelector(selectLastClickCount)
  
  const contactsMap = contacts.map((contact, i) => (
    <div className={styles.contactCard} key={i} onClick={() => {
      navigate(`/contact/${contact.id}`)
    }}>
      <div>{contact.firstName}</div>
      <div>{contact.lastName}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
    </div>
  ));


  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      {/* <div className={styles.sortDropdownContainer}>
        <select
          value={sortStatus}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setSortStatus(e.target.value));
          }}
        >
          <option value={SortValues.FIRST_ASC}>First Name: A-Z</option>
          <option value={SortValues.FIRST_DESC}>First Name: Z-A</option>
          <option value={SortValues.LAST_ASC}>Last Name: A-Z</option>
          <option value={SortValues.LAST_DESC}>Last Name: Z-A</option>
        </select>
      </div> */}
      <div className={styles.contactList}>
        <div className={styles.listHeader}>
          <div className={styles.columnTitle} onClick={() => {
            dispatch(setLastClickCount(0))
            dispatch(setFirstClickCount(firstClickCount + 1))
            if (firstClickCount === 2) {
              dispatch(setFirstClickCount(0))
            }
          }}>
            <div>First</div>
            {firstClickCount === 1 ? <span><i className="fas fa-sort-up"></i></span> : null }
            {firstClickCount === 2 ? <span><i className="fas fa-sort-up fa-rotate-180"></i></span> : null }
          </div>
          <div className={styles.columnTitle} onClick={() => {
            dispatch(setFirstClickCount(0))
            dispatch(setLastClickCount(lastClickCount + 1))
            if (lastClickCount === 2) {
              dispatch(setLastClickCount(0))
            }
          }}>
            <div>Last</div>
            {lastClickCount === 1 ? <span><i className="fas fa-sort-up"></i></span> : null }
            {lastClickCount === 2 ? <span><i className="fas fa-sort-up fa-rotate-180"></i></span> : null }
          </div>
          <div className={styles.columnTitle}>
            Phone
          </div>
          <div className={styles.columnTitle}>
            Email
          </div>
        </div>
        {loading && contacts === undefined ? <h1>loading</h1> : contactsMap}
      </div>
    </>
  );
};

export default ContactsList;
