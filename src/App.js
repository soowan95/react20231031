import { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function Acomp() {
  // 3. context 사용하기 : useContext()
  const f = useContext(MessageContext);
  return (
    <Button onClick={() => f.setMessage("changed message")}>
      change message!!
    </Button>
  );
}

function Bcomp() {
  // 3. context 사용하기 : useContext()
  const m = useContext(MessageContext);
  return <Text>{m.message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("init state message");

  return (
    <>
      {/* context에 value 넣기 : Context.Provider value={value} */}
      <MessageContext.Provider value={{ message, setMessage }}>
        <Acomp />
        <Bcomp />
      </MessageContext.Provider>
    </>
  );
}

// 1. context 만들기 : createContext
const MessageContext = createContext(null);

export default App;
