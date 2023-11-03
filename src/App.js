import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function handleClick(e) {
    setNumber(++number);
  }
  return (
    <>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </>
  );
}

export default App;
