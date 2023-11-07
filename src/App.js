import { Button, Text } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

function Ccomp() {
  // 3. context 사용하기 : useContext(대문자...context);
  const m = useContext(MessageContext);
  return <Text>받은 메세지 : {m}</Text>;
}

function Bcomp() {
  return <Ccomp />;
}

function Acomp() {
  return <Bcomp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccomp에 전달 하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기 : <대문자...Context.Provider value={state}></대문자...Context.Provider>
  // 3. tree안에서 context 사용하기

  return (
    <>
      <Button onClick={() => setMessage("바꾼 메세지")}>메세지 바꾸기</Button>
      <MessageContext.Provider value={message}>
        <Acomp />
      </MessageContext.Provider>
    </>
  );
}

// 1. context 만들기
// context 이름은 대문자...Context
const MessageContext = createContext(null);

export default App;
