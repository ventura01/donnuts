import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";
import Layout from "../components/Layout";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv7f134",
        "template_t69rz79",
        form.current,
        "bDmkSx0wAL06Z43ZT"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout title="Contact" description="Contact page.">
      <div className={styles.container}>
        <h1 className={styles.title}>Contact us</h1>
        <div className={styles.wrapper}>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <label className={styles.label}>Name</label>
            <input
              placeholder="John Doe"
              className={styles.input}
              type="text"
              name="user_name"
            />
            <label className={styles.label}>Email</label>
            <input
              placeholder="john@email.com"
              className={styles.input}
              type="email"
              name="user_email"
            />
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              placeholder="Message"
              name="message"
            />
            <input className={styles.input} type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
