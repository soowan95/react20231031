import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w="100%"
        h="100px"
        bg="gray.300"
        gap="2"
        align="center"
        justify="space-around"
      >
        <Box bg="gold">Lorem.</Box>
        <Box bg="red">Numquam.</Box>
        <Box bg="gray">Illum?</Box>
        <Box bg="blue">Facere!</Box>
        <Box bg="green">Delectus!</Box>
      </Flex>
    </>
  );
}

export default App;
