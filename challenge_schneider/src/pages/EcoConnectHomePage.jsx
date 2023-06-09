function EcoConnectHomePage({ user }) {

  const userCapitalized = user.split(' ').map((u) => u.charAt(0).toUpperCase() + u.slice(1).toLowerCase())

  return (
    <>
      <h1>Bem vindo {userCapitalized}</h1>
    </>
  );
}
export default EcoConnectHomePage;
