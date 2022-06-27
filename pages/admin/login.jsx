import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import axios from "axios";
import Layout from "../../components/Layout";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const hanldleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      console.log(username, password);
      router.push("/admin");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Admin dashboard</h1>
          <input
            placeholder="username"
            type="text"
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} onClick={hanldleClick}>
            Sign in
          </button>
          {error && <span className={styles.error}>Wrong credentials!</span>}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
