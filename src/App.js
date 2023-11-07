import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function MyComp2({ m }) {
  return (
    <Box>
      <Text>{m}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>텍스트 바꾸기</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");

  function handleButtonClick() {
    setMessage("nice!!!!");
  }

  return (
    <>
      <MyComp1 onClick={handleButtonClick} />
      <MyComp2 m={message} />
    </>
  );
}

export default App;
