import { createContext, useState } from "react";
import { Acomp } from "./Acomp";
import { Bcomp } from "./Bcomp";

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
export const MessageContext = createContext(null);

export default App;
