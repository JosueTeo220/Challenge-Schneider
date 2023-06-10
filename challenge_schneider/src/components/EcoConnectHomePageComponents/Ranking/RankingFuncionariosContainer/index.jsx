import styles from "./RankingFuncionariosContainer.module.css";
import personImage001 from "../../../../assets/img/person001.jpg";
import personImage002 from "../../../../assets/img/person002.jpg";
import personImage003 from "../../../../assets/img/person005.jpeg";

export default function RankingFuncionariosContainer() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="row">
            <div className={styles.userImageContainer}>
              <div className={styles.userImageRanking}>
                <img
                  className="img-fluid"
                  src={personImage001}
                  alt="imagem pessoa 01"
                />
              </div>
              <div>
              Rodrigo - Publicou:<span> 61</span> vezes e possui <span>13245</span> pontos
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="row">
            <div className={styles.userImageContainer}>
              <div className={styles.userImageRanking}>
                <img
                  className="img-fluid"
                  src={personImage002}
                  alt="imagem pessoa 01"
                />
              </div>
              <div>
                Josué - Publicou:<span> 58</span> vezes e possui <span>12225</span> pontos
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="row">
            <div className={styles.userImageContainer}>
              <div className={styles.userImageRanking2}>
                <img
                  className="img-fluid"
                  src={personImage003}
                  alt="imagem pessoa 01"
                />
              </div>
              <div>
              Maria - Publicou:<span> 50</span> vezes e possui <span>11150</span> pontos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
