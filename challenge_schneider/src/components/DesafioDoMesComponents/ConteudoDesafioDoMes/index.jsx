import styles from './conteudoDesafioDoMes.module.css'
export default function ConteudoDesafioDoMes() {
  return (
    <div className="container-fluid">
      <h1 style={{ paddingTop: "100px" }}>
        DESAFIO DO MÊS: <span style={{ color: "green" }}>OUTUBRO</span>
      </h1>
      <h3 style={{ marginTop: "100px" }}>
        Em comemoração ao dia das crianças, divulgaremos várias ações e ideias
        que abrangem todos os perfis e idades. Adote essa ideia e divirta-se!
        Claro, não esqueça de compartilhar conosco a sua experiência!
      </h3>
      <div>
        <div className="container-fluid" style={{ marginTop: "140px" }}>
          <blockquote className={styles.customCitation}>
            <p className={styles.textGreen + ' ' + styles.italicText}>
              "A melhor maneira de tornar as crianças boas é torná-las felizes."
            </p>
            <footer className={styles.blockquoteFooter}> - Oscar Wilde</footer>
          </blockquote>
        </div>
      </div>
    </div>
    
  );
}
