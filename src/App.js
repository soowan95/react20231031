import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>click!!!</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ m }) {
  return <Text>{m}</Text>;
}

function OtherComp({ m }) {
  return <OtherChildComp m={m} />;
}

function App(props) {
  const [message, setMessage] = useState("hello");

  return (
    <>
      <SomeComp onClick={() => setMessage("clicked!!!!!!")} />
      <OtherComp m={message} />
    </>
  );
}

export default App;
