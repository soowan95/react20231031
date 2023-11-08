import { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(setup): The function with your Effect's logic.
  // 두번째 파라미터: setup을 실행시키는 값의 나열(배열)
  //                빈 배열이면 첫 rendering때만 실행됨
  useEffect(() => {
    console.log("excute effect function");
  }, [number, text]);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Text>{text}</Text>
    </div>
  );
}

export default App;
