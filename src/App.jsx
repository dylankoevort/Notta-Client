import envVariables from "configs/envVariables";

function App() {
  return (
    <>
      <h1>Env: {envVariables.env}</h1>
      <h1>Api Url: {envVariables.gateway}</h1>
    </>
  );
}

export default App;
