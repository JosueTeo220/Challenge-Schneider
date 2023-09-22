import Boliche from "../../../assets/img/Boliche.jpg";
import MuseuDoAmanha from "../../../assets/img/Museu_do_Amanha.png";
import VoluntarioVirtual from "../../../assets/img/voluntarioVirtual.jpeg";
export default function DesafioDicasComponent() {
  return (
    <div>
      <div className="container" style={{ paddingTop: "200px" }}>
        <h2 className="text-success" style={{ paddingBottom: "100px" }}>
          SUGESTÃO DE ATIVIDADES PARA FAZER COM AS CRIANÇAS
        </h2>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Boliche com Garrafa PET</strong>
            <p style={{ paddingTop: "20px" }}>
              Reúna todas as garrafas de plástico que encontrar em casa e chame
              as crianças para pintá-las e enfeitá-las. Quando estiverem
              prontas, organize as garrafas em fila, com espaço entre elas.
              Então, usando uma bola, mostre para a criança como derrubar os
              pinos criados com garrafa pet. Strike! É diversão na certa!
            </p>
            <img src={Boliche} alt="boliche" className="img-fluid" />
          </li>
          <li className="list-group-item">
            <strong>Visitar o Museu do Amanhã</strong>
            <p style={{ paddingTop: "20px" }}>
              O Museu do Amanhã é um novo tipo de museu de ciências onde você é
              convidado a examinar o passado, conhecer as transformações atuais
              e imaginar cenários possíveis para os próximos 50 anos. As
              orientações de sustentabilidade pautam o Museu do Amanhã. Entre as
              ações de arquitetura estão a utilização de água da Baía de
              Guanabara no sistema de ar-condicionado e a captação de energia
              solar através de painéis fotovoltaicos instalados na cobertura do
              edifício.{" "}
              <p style={{ paddingTop: "50px" }}>
                O museu vem cumprindo as etapas necessárias para obter a
                certificação LEED (Leadership in Energy and Environmental
                Design, Liderança em Energia e Projeto Ambiental), referência
                mundial de certificação para práticas sustentáveis. Vale a pena
                agendar essa visita e impactar os pequenos com cultura e ideias
                sustentáveis. A melhor parte é que você não precisa estar no Rio
                de Janeiro para conhecer o museu, basta clicar{" "}
              </p>
              <a
                href="https://artsandculture.google.com/partner/museu-do-amanh%C3%A3?hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                AQUI
              </a>{" "}
              para acessar as exposições disponíveis pelo Google Arts and
              Culture.
            </p>
            <img src={MuseuDoAmanha} alt="boliche" className="img-fluid" />
          </li>
        </ul>
      </div>
      <div
        className="container mt-5"
        style={{ paddingTop: "150px", marginBottom: "120px" }}
      >
        <h2
          className="text-success"
          style={{ borderBottom: "1px solid green" }}
        >
          CAMPANHAS E VOLUNTARIADO
        </h2>

        {/* Become a Volunteer */}
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">BECOME A VOLUNTEER</h5>
            <p className="card-text" style={{ paddingTop: "20px" }}>
              Olá! Vimos no seu formulário que você possui conhecimentos
              avançados em Inglês e habilidades em contar histórias. Que tal ser
              voluntário num projeto muito legal para ensinar Inglês Básico e/ou
              contar histórias em orfanatos e institutos comunitários de ensino
              infantil?
              <p style={{ paddingTop: "80px" }}>
                A proposta do projeto é fornecer aulas virtuais síncronas (o que
                possibilita a participação de qualquer colaborador, de qualquer
                filial da Schneider), uma vez por semana, para crianças de 07 a
                14 anos. Além da missão incrível desse projeto, que envolve
                contribuir com o desenvolvimento de habilidades no campo das
                linguagens para beneficiar o futuro dessas crianças, você
                acumulará o dobro de pontos em cada aula realizada. Let's go?
              </p>
            </p>
            <div className=" container-fluid mb-5">
              <img
                src={VoluntarioVirtual}
                alt="boliche"
                className="img-fluid"
              />
            </div>
            <a href="https://google.com.br" className="btn btn-success">
              Clique aqui para fazer sua inscrição
            </a>
          </div>
        </div>

        {/* Campanha Tampinhas Solidárias */}
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">CAMPANHA TAMPINHAS SOLIDÁRIAS</h5>
            <p className="card-text" style={{ paddingTop: "20px" }}>
              Estamos lançando uma iniciativa especial para arrecadar tampinhas
              plásticas e ajudar o Hospital do Câncer Infantil em sua importante
              missão de proporcionar tratamento e cuidado aos pequenos
              diagnosticados com câncer. É fácil participar! Basta começar a
              guardar as tampinhas plásticas de garrafas, potes e embalagens que
              você utiliza no seu dia a dia. As tampinhas plásticas arrecadadas
              serão convertidas em recursos financeiros que serão direcionados
              para a compra de medicamentos, realização de exames, melhorias nas
              instalações e apoio aos pacientes e suas famílias.
            </p>
            <p className="card-text" style={{ paddingTop: "20px" }}>
              Além de contribuir com as questões ligadas à saúde, essa ação
              promove a redução do descarte inadequado de plástico, que é um dos
              materiais mais poluentes do nosso planeta. Ao arrecadar e reciclar
              as tampinhas plásticas, estamos promovendo a reutilização desse
              material, evitando que ele acabe em aterros sanitários, oceanos ou
              seja incinerado.
            </p>
            <p className="card-text" style={{ paddingTop: "20px" }}>
              Instalamos um posto de coleta no hall de todas as Unidades da
              Schneider e receberemos tampinhas até o dia 30/10/2023. Vamos
              juntos nessa causa?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
