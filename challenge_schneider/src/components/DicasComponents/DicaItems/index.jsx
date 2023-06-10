import ImagemChuva from "../../../assets/img/Reaproveitando_agua_da_chuva.webp";
import ColetaSeletiva from "../../../assets/img/ColetaSeletiva.png";
import ModaSustentavel from "../../../assets/img/Brecho.jpg";
import Foguete from "../../../assets/img/Foguete.jpeg";
import Carona from "../../../assets/img/Carona.jpeg";
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
                Pratique a coleta seletiva em sua casa ou local de trabalho.
                Separe corretamente os materiais recicláveis, como papel,
                plástico, vidro e metal, do lixo orgânico. Essa ação contribui
                para a redução do volume de resíduos destinados a aterros
                sanitários e promove a reciclagem. Você sabe identificar as
                cores para cada tipo de material?
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
                Você sabia que a produção de uma única calça jeans pode consumir
                até 7.000 litros de água? Em vez de comprar peças novas,
                explorar brechós, bazares ou plataformas online de venda de
                roupas usadas é uma excelente ação. Essa prática reduz o consumo
                excessivo, dá uma nova vida às peças e evita que mais recursos
                sejam utilizados na produção de roupas novas. Além disso, ao
                escolher roupas de segunda mão, você também pode descobrir peças
                únicas e estilosas, expressando seu próprio estilo de forma
                exclusiva e sustentável. Uma outra maneira bacana de renovar o
                guarda-roupa é doando peças que não usa mais. Que tal postar seu
                desapego aqui na plataforma? Capricha na foto!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2 className={styles.DicasNumber}>4# Dica</h2>
            <h2>BRINQUEDO SUSTENTÁVEL: FOGUETE</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={Foguete}
              alt="Imagem Dicas"
              className="img-fluid"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textDica}>
              <p>
                Com um simples truque, você pode criar uma nave espacial usando
                rolos de papel higiênico empilhados e colados. Comece abrindo o
                rolo de papel higiênico e dobre-o em formato de triângulo para
                criar a ponta do foguete. Use papel para fazer o suporte da
                base. Em seguida, recorte janelas e encaixe bonecos dentro para
                uma emocionante viagem ao espaço. Dê asas à sua imaginação e
                embarque nessa divertida aventura com as crianças, reutilizando
                materiais do dia a dia para criar brinquedos sustentáveis. Além
                de se divertir, você estará promovendo a conscientização sobre a
                importância da reutilização e da criatividade na redução de
                resíduos. Aproveite sua viagem espacial com os foguetes de rolos
                de papel higiênico e não esqueça de postar aqui na plataforma os
                registros de suas criações!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row justify-content-center">
          <div className={styles.headerExplicacao}>
            <h2 className={styles.DicasNumber}>5# Dica</h2>
            <h2>DÊ CARONA</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={Carona}
              alt="Imagem Dicas"
              className="img-fluid"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div className="col-sm-6 p-5">
            <div className={styles.textDica}>
              <p>
                Sabemos que o transporte diário para o trabalho pode ser um
                desafio, tanto em termos de trânsito quanto de impacto
                ambiental. É por isso que estamos incentivando a prática de
                caronas entre os funcionários. A ideia é simples, mas poderosa:
                ao compartilhar o trajeto com um colega, estamos reduzindo o
                número de carros nas ruas, diminuindo as emissões de gases
                poluentes e contribuindo para a preservação do meio ambiente. A
                carona é uma ótima oportunidade para interagir e conhecer melhor
                os colegas de trabalho, além de oferecer benefícios pessoais,
                como economia de recursos financeiros e redução do estresse no
                trânsito. Juntos, podemos fazer a diferença e criar um futuro
                mais verde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
