import { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function Bcomp() {
  // 3. context 사용하기 : useContext()
  const m = useContext(MessageContext);
  return <Text>{m.message}</Text>;
}
