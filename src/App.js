import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  // set... 메소드로 상태 변경할 수 있음
  // state 가 같은지 아닌지 판단해서 re-render 결정함
  const [number, setNumber] = useState(0);
  const [numberObject, setNumberObject] = useState({ number: 0 });

  return (
    <>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button
          onClick={() => {
            const newNumberObject = { ...numberObject };
            newNumberObject.number = newNumberObject.number + 1;
            setNumberObject(newNumberObject);
          }}
        >
          number object 변경
        </Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </>
  );
}

export default App;
