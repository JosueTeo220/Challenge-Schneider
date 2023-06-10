import { useState } from "react";
import SocialPost from "../components/SocialPost";
import SocialPostPublish from "../components/SocialPost/SocialPostPublish";

import { ReactComponent as ShareImage } from "../assets/img/Social Media_Flatline.svg";

export default function Social({ user }) {
  const defaultPosts = [
    {
      personName: "Admin",
      attachments: [],
      message:
        "🌍🌱 Hoje, estou orgulhoso em compartilhar que minha empresa alcançou um marco importante em nossa jornada de sustentabilidade! Com dedicação e esforço contínuos, reduzimos nossas emissões de carbono em 50% nos últimos cinco anos. Estamos comprometidos em ser uma força positiva para o meio ambiente e continuaremos buscando soluções inovadoras para enfrentar os desafios climáticos. Juntos, podemos construir um futuro mais verde e sustentável! #ESG #Sustentabilidade #ResponsabilidadeAmbiental 🌿💚",
    },
    {
      personName: "Vivi",
      attachments: [],
      message:
        "🌎🤝 Hoje, tive o privilégio de participar de uma mesa-redonda sobre diversidade e inclusão no mundo corporativo. Foi incrível ver líderes de diferentes setores compartilhando suas experiências e discutindo maneiras de promover um ambiente de trabalho mais equitativo. Vamos continuar trabalhando juntos para criar oportunidades iguais para todos, independentemente de sua origem, gênero ou identidade. A diversidade é uma força e juntos podemos fazer a diferença! #ESG #Diversidade #Inclusão 🌈🙌",
    },
    {
      personName: "Josue",
      attachments: [],
      message:
        "🌍👩‍🔬 Hoje, tive a oportunidade de visitar uma escola local para falar sobre educação ambiental e sustentabilidade. Foi incrível ver o entusiasmo das crianças enquanto aprendiam sobre a importância de cuidar do nosso planeta. Estou inspirado em fazer parte de uma empresa que valoriza a educação e está comprometida em criar um futuro mais sustentável para as gerações futuras. Juntos, podemos ensinar e aprender a proteger nosso lar, a Terra! #ESG #EducaçãoAmbiental #Sustentabilidade 🌿📚",
    },
    {
      personName: "Rodrigo",
      attachments: [],
      message:
        "Ontem comprei duas peças de roupa no Brechó Legal, indicado aqui na loja da plataforma. Troquei alguns pontos acumulados por desconto e a compra saiu muito barata! Estou me sentindo feliz por ter economizado e ainda contribuído com a redução do consumo excessivo e o desperdício de recursos! Recomendo, pessoal"
    },
  ];

  const [posts, setPosts] = useState(defaultPosts);

  function handlePostPublished(post) {
    console.log(post);
    setPosts((prevPosts) => [post, ...prevPosts]);
  }

  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>
        Poste aqui suas ideias e ganhe Pontos!
      </h1>
      <ShareImage></ShareImage>
      <SocialPostPublish user={user} postPublished={handlePostPublished} />
      {posts.map((post, index) => (
        <SocialPost key={`post_${index}`} post={post} />
      ))}
    </div>
  );
}
