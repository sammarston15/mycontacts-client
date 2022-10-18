import React, { FC } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectContacts, selectIsLoading, selectUser } from "../../redux/contacts/selectors";
import styles from "./home.module.scss";
// import axios from "axios";

// Components
import Header from "../header/Header";
import ContactsList from '../home/ContactsList';

export const Home: FC = () => {
   

  return (
    <div className={styles.home}>
      <Header />
      <ContactsList />
    </div>
  );
};
