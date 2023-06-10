import styles from "./HeaderTitle.module.css";
export function HeaderTitle({ userCapitalized }) {
  return (
    <div>
      <h1>
        Bem-vindo,
        <span className={styles.userTitleStyle}> {userCapitalized}</span>
      </h1>
    </div>
  );
}
