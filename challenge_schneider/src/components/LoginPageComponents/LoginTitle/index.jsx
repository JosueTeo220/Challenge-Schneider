import React from "react";
import styles from "./LoginTitle.module.css";

export default function LoginTitle() {
  return (
    <div className={styles.loginTitleContainer}>
      <p className={styles.title}>
        <span className={styles.fadeIn}>Schneider</span>EcoConnect
      </p>
    </div>
  );
}
