import { Box, Button, Center, Input } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  // 상태(state)가 변경(이전 state와 달라짐)되면
  // Component를 다시 그림 (re render)

  // state : react가 관리하는 component의 값

  // state를 얻는 방법
  // useState();

  // 배열을 리턴함
  // index 0 : 현재상태(state)
  // index 1 : state를 변경할 수 있는 메소드
  const [message, setMessage] = useState();

  let text = "초기 메세지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log("text", text);
  }
  function handleButtonClick(e) {
    setMessage("changed state");
  }
  return (
    <>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={handleButtonClick}>상태 바꾸기</Button>
      <Button onClick={() => setMessage("")}>빈 문자열로 바꾸기</Button>
      <p>{message}</p>
    </>
  );
}

export default App;
