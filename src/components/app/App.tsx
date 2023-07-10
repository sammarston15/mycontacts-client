import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "../home/home";
import { Login } from "../login/Login";
import SignUp from "../signup/SignUp";
import NewContact from '../newContact/NewContact'
import EditContact from "../editContact/EditContact";
import ContactsList from "../home/ContactsList";

export const App: FC = () => (
  <Router>
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<NewContact />} />
        <Route path='/contacts/:contactIndex' element={<EditContact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  </Router>
);
