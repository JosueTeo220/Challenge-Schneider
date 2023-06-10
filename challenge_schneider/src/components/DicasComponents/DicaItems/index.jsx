import ImagemChuva from "../../../assets/img/Reaproveitando_agua_da_chuva.webp";
import styles from "./DicasItems.module.css";
export function DicasItems() {
  return (
    <div style={{marginTop: '100px'}}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>REAPROVEITANDO A ÁGUA DA CHUVA</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img src={ImagemChuva} alt="" className="img-fluid" style={{borderRadius: '40px'}}/>
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
    </div>
  );
}
