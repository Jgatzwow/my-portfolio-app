import React from "react";
import styles from "./infoTable.module.css";

export const InfoTable = () => {
  return (
    <table className={styles.infoTable}>
      <thead />
      <tbody>
        <tr className={styles.infoTable_row}>
          <td className={styles.infoTable__text}>First Name</td>
          <td className={styles.infoTable__personal}>Mykhailo</td>
        </tr>
        <tr>
          <td className={styles.infoTable__text}>Last Name</td>
          <td className={styles.infoTable__personal}>Sokolenko</td>
        </tr>
        <tr>
          <td className={styles.infoTable__text}>BirthDate</td>
          <td className={styles.infoTable__personal}>24 August 1993</td>
        </tr>
        <tr>
          <td className={styles.infoTable__text}>Nationality</td>
          <td className={styles.infoTable__personal}>Ukrainian</td>
        </tr>
        <tr>
          <td className={styles.infoTable__text}>Experience</td>
          <td className={styles.infoTable__personal}>1.5 years</td>
        </tr>
        <tr>
          <td className={styles.infoTable__text}>Address</td>
          <td className={styles.infoTable__personal}>Kiev</td>
        </tr>
      </tbody>
    </table>
  );
};
