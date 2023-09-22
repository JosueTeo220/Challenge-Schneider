import { Link } from "react-router-dom";

export default function FormInput() {
  return (
    <div className="container-fluid">
      <h1 style={{ color: "green" }}>Informações Pessoais</h1>
      <form>
        <div className="row">
          {/* Coluna 1 */}
          <div className="col-md-4">
            <div className="form-group mt-4 p-2">
              <label htmlFor="nomeCompleto">Nome Completo:</label>
              <input type="text" className="form-control text-bg-success" id="nomeCompleto" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="nomeSocial">Nome Social (opcional):</label>
              <input type="text" className="form-control text-bg-success" id="nomeSocial" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="chamadoPlataforma">
                Como você gostaria de ser chamado na nossa plataforma?
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="chamadoPlataforma"
              />
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="col-md-4">
            <div className="form-group mt-4 p-2">
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input type="date" className="form-control text-bg-success" id="dataNascimento" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="sexo">Sexo:</label>
              <select className="form-control text-bg-success" id="sexo">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="identidadeGenero">
                Identidade de Gênero (opcional):
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="identidadeGenero"
              />
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="col-md-4">
            <div className="form-group mt-4 p-2">
              <label htmlFor="orientacaoSexual">
                Orientação Sexual (opcional):
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="orientacaoSexual"
              />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="etniaRaca">Etnia/Raça (opcional):</label>
              <input type="text" className="form-control text-bg-success" id="etniaRaca" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="naturalidade">Naturalidade:</label>
              <input type="text" className="form-control text-bg-success" id="naturalidade" />
            </div>
          </div>
          {/* Coluna 4*/}
          <div className="col-md-4 mt-5">
            <h3 style={{ color: "green" }}>Informações de Contato</h3>
            <div className="form-group mt-4 p-2">
              <label htmlFor="telefone">Telefone (opcional):</label>
              <input type="text" className="form-control text-bg-success" id="telefone" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="endereco">Endereço:</label>
              <input type="text" className="form-control text-bg-success" id="endereco" />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="redesSociais">Redes Sociais (opcional):</label>
              <input type="text" className="form-control text-bg-success" id="redesSociais" />
            </div>
          </div>
          {/* Coluna 5 - Acessibilidade */}
          <div className="col-md-8 mt-5">
            <h3 style={{ color: "green" }}>Acessibilidade</h3>
            <div className="form-group mt-4 p-2">
              <label htmlFor="identificaDeficiencia">
                Você se identifica como pessoa com deficiência?
              </label>
              <select className="form-control text-bg-success" id="identificaDeficiencia">
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </select>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="tipoDeficiencia">Se sim, qual?</label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="tipoDeficiencia"
              />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="necessidadeAcessibilidade">
                Você tem alguma necessidade específica de acessibilidade que
                gostaria de compartilhar?
              </label>
              <textarea
                className="form-control text-bg-success"
                id="necessidadeAcessibilidade"
                rows="3"
              ></textarea>
            </div>
          </div>
          {/* Coluna 6 - Diversidade Familiar */}
          <div className="col-md-4 mt-5">
            <h3 style={{ color: "green" }}>Diversidade Familiar</h3>
            <div className="form-group mt-4 p-2">
              <label htmlFor="estadoCivil">Estado Civil:</label>
              <select className="form-control text-bg-success" id="estadoCivil">
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
              </select>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="composicaoFamiliar">
                Composição Familiar (opcional):
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="composicaoFamiliar"
              />
            </div>
          </div>
          {/* Coluna 7 - Informações Educacionais */}
          <div className="col-md-8 mt-5">
            <h3 style={{ color: "green" }}>Informações Educacionais</h3>
            <div className="form-group mt-4 p-2">
              <label htmlFor="nivelEscolaridade">Nível de Escolaridade:</label>
              <select className="form-control text-bg-success" id="nivelEscolaridade">
                <option value="fundamental">Fundamental</option>
                <option value="medio">Médio</option>
                <option value="superior">Superior</option>
                <option value="posGraduacao">Pós-Graduação</option>
              </select>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="areaEstudoTrabalho">
                Área de Estudo/Trabalho:
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="areaEstudoTrabalho"
              />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="idiomasConhecidos">
                Quais idiomas você conhece além do Português?
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="idiomasConhecidos"
              />
            </div>
          </div>
          {/* Coluna 8 - Visão de Mundo, Crença e Interesses */}
          <div className="col-md-12 mt-5">
            <h3 style={{ color: "green" }}>
              Visão de Mundo, Crença e Interesses
            </h3>
            <div className="form-group mt-4 p-2">
              <label htmlFor="hobbiesInteresses">
                Quais os seus Hobbies e principais interesses?
              </label>
              <textarea
                className="form-control text-bg-success"
                id="hobbiesInteresses"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="causasSociais">
                Participação em Causas Sociais ou Ativismo (opcional):
              </label>
              <textarea
                className="form-control text-bg-success"
                id="causasSociais"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="religiaoFilosofia">
                Qual a sua Religião/Filosofia de Vida?
              </label>
              <input
                type="text"
                className="form-control text-bg-success"
                id="religiaoFilosofia"
              />
            </div>
            <div className="form-group mt-4 p-2">
              <label htmlFor="comentarioCrenca">
                Você gostaria de compartilhar alguma informação adicional ou
                fazer algum comentário relacionado às suas crenças, identidade
                ou visão de mundo?
              </label>
              <textarea
                className="form-control text-bg-success"
                id="comentarioCrenca"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <Link to="/home">
          <button
            type="submit"
            className="btn btn-success mt-5 mb-5"
            style={{ paddingInline: "10vw", paddingBlock: "10px", backgroundColor: "green"}}
          >
            Enviar
          </button>
        </Link>
      </form>
    </div>
  );
}
