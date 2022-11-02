import React from "react";
import styles from "./RemoteWork.module.css";
import containerStyles from "../../common/styles/Container.module.css";

export const RemoteWork = () => {
  return (
    <section className={styles.remoteJob}>
      <div
        className={`${containerStyles.container} ${styles.remote__container}`}
      >
        <h2 className={styles.title}>I am up for remote vacancies</h2>
        <a href={"#"} className={styles.remote__btn}>
          Hire me
        </a>
      </div>
    </section>
  );
};
