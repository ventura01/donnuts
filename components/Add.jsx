import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(true)}>
          X
        </span>
      </div>
    </div>
  );
};

export default Add;
