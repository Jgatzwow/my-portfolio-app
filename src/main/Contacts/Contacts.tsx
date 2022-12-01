import React from "react";
import styles from "./Contacts.module.css";
import inputStyles from "../../common/styles/InputStyles.module.css";
import containerStyles from "../../common/styles/Container.module.css";
import { GetInTouch } from "./getInTouch/GetInTouch";

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div
        className={`${containerStyles.container} ${styles.contacts__container}`}
      >
        <h2 className={styles.contacts__title}>
          GET <span className={styles.contacts__title_yellow}>IN TOUCH</span>
        </h2>
        <span className={styles.contacts__text}>
          I’m always open to discussing product design work or partnerships.
        </span>

        <div className={styles.info__form__wrapper}>
          <GetInTouch />
          <div className={styles.form__content__wrapper}>
            <p className={styles.contacts__suggestion}>
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <form className={styles.form}>
              <div className={styles.form__inputs__wrapper}>
                <input className={inputStyles.default} type="text" />
                <input className={inputStyles.default} type="text" />
              </div>
              <textarea className={inputStyles.defaultTextArea}></textarea>
              <button type={"submit"} className={styles.contacts__btn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
