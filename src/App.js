import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const isOdd = number % 2 == 1;

  function handleInputChange(e) {
    setNumber(Number(e.target.value));
  }

  return (
    <>
      <Input onChange={handleInputChange} type="number" />
      <Text>{(isOdd && "홀수") || "짝수"}</Text>
    </>
  );
}

export default App;
