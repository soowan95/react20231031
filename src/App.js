import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Provident?</Button>
      <Button colorScheme="orange">Optio.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Ipsum.
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Excepturi.
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Unde.
      </Button>
      <Button colorScheme="orange" variant="ghost">
        Debitis!
      </Button>
      <Button variant="link">Aliquid.</Button>
      <Button leftIcon={<EmailIcon />}>Aut.</Button>
      <Button rigthIcon={<ArrowRightIcon />}>Vel.</Button>
      <Button isLoading={true}>Dolores.</Button>
      <Button isLoading loadingText="전송중">
        Nisi.
      </Button>
    </>
  );
}

export default App;
