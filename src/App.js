import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App() {
  const [text, setText] = useState("hello");

  console.log(text);

  function handleButtonClick(e) {
    // text 라는 state 값 변경
    setText("greeting");
  }

  return (
    <>
      <Button onClick={handleButtonClick}>상태 변경!</Button>
      <p>{text}</p>
    </>
  );
}

export default App;
