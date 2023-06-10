import { ReactComponent as ExplicacaoImage } from "../../../assets/img/Question_Flatline.svg";
import { ReactComponent as ExplicacaoPontoImage } from "../../../assets/img/Achievement _Flatline.svg";
import { ReactComponent as ExplicacaoMundo } from "../../../assets/img/Global Warming _Monochromatic.svg";
import { ReactComponent as ExplicacaoShare } from "../../../assets/img/Share_Flatline.svg";
import { Link } from "react-router-dom";
import styles from "./ExplicacaoPontos.module.css";
export default function ExplicacaoPontos() {
  return (
    <div className={styles.mainContainerExplicacao}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>O que é a plataforma?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ExplicacaoImage />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <p>
                Bem-vindo à nossa plataforma sustentável, onde suas ações
                diárias podem fazer a diferença real para o planeta! Já imaginou
                transformar suas escolhas conscientes em benefícios tangíveis?
              </p>
              <p>
                Agora você pode, graças ao nosso programa de recompensas
                sustentáveis para colaboradores da Schneider. Nossa plataforma
                foi projetada para incentivar e recompensar suas práticas
                sustentáveis. Aqui, cada escolha que você faz em prol da
                sustentabilidade, da diversidade e da ajuda das minorias se
                transforma em pontos valiosos, que podem ser trocados por
                produtos incríveis e benefícios exclusivos em nossa{" "}
                <span>
                  <Link to="/loja">Loja</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>Como obter pontos?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ExplicacaoPontoImage />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <p>
                Para obter pontos, o foco principal está em adotar práticas
                sustentáveis e compartilhar suas experiências e ideias com a
                comunidade. Ao clicar aqui, você será redirecionado para a
                página{" "}
                <span>
                  <Link to="/social">"Eu Sustentável"</Link>
                </span>
                , onde poderá compartilhar suas iniciativas sustentáveis.
                Conte-nos sobre as ações que você realiza no seu dia a dia para
                reduzir o impacto ambiental, como economizar energia, reduzir o
                consumo de água, adotar hábitos de transporte sustentável,
                reciclar e reutilizar materiais, entre outras práticas
                sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>Veja dicas de Sustentabilidade</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ExplicacaoMundo />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <p>
                Acompanhe diariamente{" "}
                <span>
                  <Link to="/dicas">Dicas</Link>
                </span>{" "}
                sobre sustentabilidade, e a partir das práticas de ESG ajude as
                pessoas e o mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>Compartilhe suas Ações</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ExplicacaoShare />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <p>
                <span>
                  <Link to="/social">Mostre</Link>
                </span>{" "}
                suas ações para outros colaboradores e ganhe pontos !
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>Video Pitch</h2>
          </div>
          <div >
            <iframe
            className={styles.videoFrame}
              width="70%"
              height="600px"
              src="https://www.youtube.com/embed/hb5WETI05os"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
