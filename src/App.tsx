import { C1, C2, C3 } from "./components";

function App() {
  console.log(7);
  return (
    <>
      <C1 />
      <C2>
        <C3 />
      </C2>
    </>
  );
}

export default App;
