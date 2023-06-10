import ImagemChuva from "../../../assets/img/Reaproveitando_agua_da_chuva.webp";
import ColetaSeletiva from "../../../assets/img/ColetaSeletiva.png"
import ModaSustentavel from "../../../assets/img/Brecho.jpg"
import styles from "./DicasItems.module.css";
export function DicasItems() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2 className={styles.DicasNumber}>1# Dica</h2>
            <h2>REAPROVEITANDO A ÁGUA DA CHUVA</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={ImagemChuva}
              alt="Imagem Dicas"
              className="img-fluid"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textDica}>
              <p>
                Contribua para a preservação dos recursos hídricos instalando
                sistemas de captação de água da chuva. Use essa água para regar
                plantas, limpar pisos e descargas, reduzindo assim o consumo de
                água potável.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2 className={styles.DicasNumber}>2# Dica</h2>
            <h2>FAÇA COLETA SELETIVA DO LIXO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={ColetaSeletiva}
              alt="Imagem Dicas"
              className="img-fluid"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textDica}>
              <p>
              Pratique a coleta seletiva em sua casa ou local de trabalho. Separe corretamente os materiais recicláveis, como papel, plástico, vidro e metal, do lixo orgânico. Essa ação contribui para a redução do volume de resíduos destinados a aterros sanitários e promove a reciclagem. Você sabe identificar as cores para cada tipo de material?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2 className={styles.DicasNumber}>3# Dica</h2>
            <h2>PRATIQUE A MODA SUSTENTÁVEL</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={ModaSustentavel}
              alt="Imagem Dicas"
              className="img-fluid"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textDica}>
              <p>
              Você sabia que a produção de uma única calça jeans pode consumir até 7.000 litros de água? Em vez de comprar peças novas, explorar brechós, bazares ou plataformas online de venda de roupas usadas é uma excelente ação. Essa prática reduz o consumo excessivo, dá uma nova vida às peças e evita que mais recursos sejam utilizados na produção de roupas novas. Além disso, ao escolher roupas de segunda mão, você também pode descobrir peças únicas e estilosas, expressando seu próprio estilo de forma exclusiva e sustentável. Uma outra maneira bacana de renovar o guarda-roupa é doando peças que não usa mais. Que tal postar seu desapego aqui na plataforma? Capricha na foto!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
