import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function handlePlusButtonClick(e) {
    setNumber(number + 1);
  }
  function handleMinusButtonClick(e) {
    setNumber(number - 1);
  }
  return (
    <>
      <input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusButtonClick}>+</Button>
        <Button onClick={handleMinusButtonClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(++number)}>+</Button>
        <Button onClick={() => setNumber(--number)}>-</Button>
      </Box>
    </>
  );
}

export default App;
