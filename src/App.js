import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <Input onChange={handleChange} />
      <Text>{message}</Text>
    </>
  );
}

export default App;
