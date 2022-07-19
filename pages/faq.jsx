import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Faq.module.css";

const FAQ = () => {
  return (
    <Layout title="FAQ" description="Frequetly Asked Quetions page.">
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>How can we help?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quo
            a laudantium quae itaque. Facilis.
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Iphone</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Andoid</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Xiaomi</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Pixel Phone</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Chrome</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Safari</h3>
            <p className={styles.itemDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              pariatur minus ullam nemo, voluptates sint voluptatibus laudantium
              rerum delectus quasi iste animi natus. Ipsa.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
