import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [price, setPrice] = useState(null);

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "http://api.cloudinary.com/v1_1/the-webdev/upload",
        data
      );
      //   console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newProduct = { file, desc, title, price, img: url };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(true)}>
          X
        </span>
        <h1>Add new product</h1>
        <div className={styles.item}>
          <label htmlFor="file" className={styles.label}>
            Choose an image
          </label>
          <input
            type="file"
            className={styles.input}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="desc" className={styles.label}>
            Description
          </label>
          <textarea
            placeholder="Once upon a time..."
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            placeholder="Price"
            type="number"
            className={styles.input}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
