import { useState } from "react";
import SocialPost from "../components/SocialPost";
import SocialPostPublish from "../components/SocialPost/SocialPostPublish";

import { ReactComponent as ShareImage } from "../assets/img/Social Media_Flatline.svg";

export default function Social({ user }) {
  const defaultPosts = [
    {
      personName: "Luciana Dias, 15/09/2023",
      attachments: [],
      message:
        "Nem acredito que consegui trocar meus pontos acumulados por um descontão de 50% no brechó parceiro da EcoConnect e comprei essa blusinha linda. Muito bom saber que reutilizarei uma roupa que poderia ter sido descartada e ainda ajudei o comércio local sustentável. Já quero usar amanhã!",
    },
    {
      personName: "Claudio Bueno, 17/09/2023",
      attachments: [],
      message:
        "Pessoal, fiz o cadastro aqui anteontem para participar do programa de caronas. Minha rota é de Cajamar para o Sacomã. Caso aalguém tenha interesse nessa rota, formaliza o cadastro. Já vou levar o Luiz da Contabilidade, então ainda restam 03 vagas no carro.",
    },
    {
      personName: "Vinicius Nascimento, 18/09/2023",
      attachments: [],
      message:
        "Aprendi a fazer compostagem e quero compartilhar com vocês. Aí vai: \n-Escolha um local adequado.Adicione resíduos orgânicos (restos de comida, folhas, cascas de frutas, etc.).\n-Mantenha o composto úmido, mas não encharcado.\n-Aeração ocasional é importante (vire os materiais).\n-Aguarde vários meses até obter composto maduro.\n-Use o composto em seu jardim como fertilizante.\n-Eu montei uma horta no quintal de casa e fiz a compostagem desse jeitinho. \nFuncionou demais. Recomendo a todos! Vivi",
    },
    {
      personName: "Rodrigo",
      attachments: [],
      message:
        "Ontem comprei duas peças de roupa no Brechó Legal, indicado aqui na loja da plataforma. Troquei alguns pontos acumulados por desconto e a compra saiu muito barata! Estou me sentindo feliz por ter economizado e ainda contribuído com a redução do consumo excessivo e o desperdício de recursos! Recomendo, pessoal",
    },
    {
      personName: "Rodrigo",
      attachments: [],
      message:
        "Ontem comprei duas peças de roupa no Brechó Legal, indicado aqui na loja da plataforma. Troquei alguns pontos acumulados por desconto e a compra saiu muito barata! Estou me sentindo feliz por ter economizado e ainda contribuído com a redução do consumo excessivo e o desperdício de recursos! Recomendo, pessoal",
    },
    {
      personName: "Rodrigo",
      attachments: [],
      message:
        "Ontem comprei duas peças de roupa no Brechó Legal, indicado aqui na loja da plataforma. Troquei alguns pontos acumulados por desconto e a compra saiu muito barata! Estou me sentindo feliz por ter economizado e ainda contribuído com a redução do consumo excessivo e o desperdício de recursos! Recomendo, pessoal",
    },
    {
      personName: "Rodrigo",
      attachments: [],
      message:
        "Ontem comprei duas peças de roupa no Brechó Legal, indicado aqui na loja da plataforma. Troquei alguns pontos acumulados por desconto e a compra saiu muito barata! Estou me sentindo feliz por ter economizado e ainda contribuído com a redução do consumo excessivo e o desperdício de recursos! Recomendo, pessoal",
    },
  ];

  const [posts, setPosts] = useState(defaultPosts);

  function handlePostPublished(post) {
    console.log(post);
    setPosts((prevPosts) => [post, ...prevPosts]);
  }

  return (
    <div>
      <h1 style={{ marginBottom: "30px", paddingTop: "80px" }}>
        Poste aqui suas ideias!<div></div>
      </h1>
      <ShareImage></ShareImage>
      <SocialPostPublish user={user} postPublished={handlePostPublished} />
      {posts.map((post, index) => (
        <SocialPost key={`post_${index}`} post={post} />
      ))}
    </div>
  );
}
