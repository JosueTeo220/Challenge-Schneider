import FormInput from "../FormInput";
export default function PersonFormTitle({ user }) {
  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>
        A <span style={{ color: "green" }}>Eco Connect</span> quer te conhecer
        um pouco mais!
      </h1>
      <div style={{ paddingTop: "80px" }}>
        <h2>
          Essas informações serão usadas para direcionar melhor nosso conteúdo a
          você
        </h2>
      </div>
      <div style={{ paddingTop: "80px" }}>
        <FormInput />
      </div>
    </div>
  );
}
