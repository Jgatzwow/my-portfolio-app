import React from "react";
import styles from "./Contacts.module.css";
import inputStyles from "../../common/styles/InputStyles.module.css";
import containerStyles from "../../common/styles/Container.module.css";

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div
        className={`${containerStyles.container} ${styles.contacts__container}`}
      >
        <h2 className={styles.title}>Contacts</h2>
        <form className={styles.form}>
          <input className={inputStyles.default} type="text" />
          <input className={inputStyles.default} type="text" />
          <textarea className={inputStyles.defaultTextArea}></textarea>
        </form>
        <button type={"submit"} className={styles.contacts__btn}>
          Send
        </button>
      </div>
    </section>
  );
};
