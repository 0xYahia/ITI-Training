import { useState } from "react";
import styles from "../src/styles/product.module.css";

const Feedback = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();
    console.log("email", email, "message", message);
  };
  return (
    <form className={styles.form} onSubmit={handlSubmit}>
      <h3 className={styles.feedbackTitle}>Add your feedback</h3>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input className={styles.inputEmail} type="email" id="email" required />
      <label className={styles.label} htmlFor="comment">
        Comment:
      </label>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        required
      ></textarea>
      <input className={styles.inputBtn} type="submit" value="Submit" />
    </form>
  );
};

export default Feedback;
