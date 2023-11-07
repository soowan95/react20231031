import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function Acomp() {
  // 3. context 사용하기 : useContext()
  const f = useContext(MessageContext);
  return (
    <Button onClick={() => f.setMessage("changed message")}>
      change message!!
    </Button>
  );
}
