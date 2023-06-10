import styles from "./SobreItem.module.css";
import { ReactComponent as ToolImage } from "../../../assets/img/Team work_Monochromatic.svg";
import { ReactComponent as Team } from "../../../assets/img/Team success _Monochromatic.svg";
import { ReactComponent as TeamWork } from "../../../assets/img/Team work_Isometric.svg";

export default function SobreItem() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>INTEGRANTES DO GRUPO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Team></Team>
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <ul>
                <li>ANDRÉ TEIXEIRA OLIVEIRA SALLES ROLIM - RM 97205</li>
                <li>RODRIGO PAIXÃO SILVEIRA - RM 96869</li>
                <li>JOSUÉ TEOBALDO DOS SANTOS - RM 97277</li>
                <li>VILMA REGINA DO NASCIMENTO - RM 97541</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>DIVISÃO DE TIMES</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <TeamWork></TeamWork>
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <h2>DESENVOLVIMENTO DO SITE</h2>
              <ul>
                <li>JOSUÉ TEOBALDO DOS SANTOS</li>
              </ul>
              <h2>ROTEIROS</h2>
              <ul>
                <li>ANDRÉ TEIXEIRA OLIVEIRA SALLES ROLIM</li>

                <li>VILMA REGINA DO NASCIMENTO</li>
              </ul>
              <h2>GRAVAÇÃO DO VIDEO PITCH</h2>
              <ul>
                <li>ANDRÉ TEIXEIRA OLIVEIRA SALLES ROLIM</li>
              </ul>
              <h2>EDIÇÃO DO VIDEO PITCH</h2>
              <ul>
                <li>
                  <li>RODRIGO PAIXÃO SILVEIRA</li>
                </li>
              </ul>
              <h2>REVISÃO GERAL DO ROTEIRO E VÍDEO</h2>
              <ul>
                <li>
                  <li>VILMA REGINA DO NASCIMENTO</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2>RECURSOS UTILIZADOS PARA DESENVOLVER O PROJETO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ToolImage></ToolImage>
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textExplicacao}>
              <ul>
                <li>WEB DEVELOPMENT WITH JAVASCRIPT: React, Javascript</li>
                <li>FRONT-END DESIGN: HTML, CSS e Bootstrap</li>
                <li>
                  SOFTWARE & TOTAL EXPERIENCE DESIGN: documentando casos de uso,
                  desenvolvimento do projeto
                </li>
                <li>
                  STORYTELLING E INSPIRAÇÃO EMPREENDEDORA: Video Pitch,
                  melhorando a comunicação empresarial, erros empresariais
                  comuns, comunicação empresarial
                </li>
                <li>
                  FORMAÇÃO SOCIAL E SUSTENTABILIDADE: Soluções sustentáveis para
                  mudar o mundo, ESG
                </li>
                <li>
                  OUTRAS FERRAMENTAS: gerenciamento do SCRUM (Click Up, Miro,
                  Gather e Github), elaboração do protótipo (Figma), edição do
                  Video Pitch (Capcut)
                </li>
              </ul>
              <p>
                Exploramos os recursos adquiridos ao longo do ano para entregar
                o projeto claro e implementável à realidade da Schneider. A
                proposta do projeto está direcionada a todo e qualquer
                colaborador que deseje adentrar em uma jornada sustentável e
                mostrar que pequenas ações podem gerar grandes transformações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
