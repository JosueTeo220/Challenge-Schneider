import styles from "./HeaderTitle.module.css";
export function HeaderTitle({ userCapitalized }) {
  return (
    <div>
      <h1 style={{ paddingTop: "80px" }}>
        Bem-vindo,
        <span className={styles.userTitleStyle}> {userCapitalized}</span>
      </h1>
      <h3 style={{ paddingTop: "80px" }}>Obrigada por preencher o formulário!</h3>
      <h4 style={{ paddingTop: "20px" }}>
        Agora que sabemos um pouco mais de você, convidamos você a conhecer um
        pouco mais sobre nós! Faça login diariamente para acompanhar as
        novidades e ganhar pontos!
      </h4>
    </div>
  );
}
