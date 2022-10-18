import React, { FC, useState } from "react";
// import axios from "axios";
import styles from "./index.module.scss";

const defaultState = {
  username: "",
  password: "",
};

export const Login: FC = () => {
  const [data, setData] = useState(defaultState);
  const { username, password } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className={styles.loginPage}>
      <div className={styles.loginModal}>
        <div className={styles.icon}>
          <i className="fas fa-user"></i>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button>log in</button>
      </div>
    </div>
  );
};
