import { Input } from "@chakra-ui/react";

function App() {
  function handleChange(e) {
    // console.log("input value is changed");
    console.log(e.target.value);
  }

  return (
    <>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </>
  );
}

export default App;
