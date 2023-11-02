import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* chakra 반응형 웹 디자인 화면 사이즈: base, sm, md, lg, xl, 2xl */}
      <SimpleGrid spacing={"10px"} columns={{ sm: 2, md: 3, lg: 4 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Quis!</Box>
        <Box bg="blue.300">Reiciendis.</Box>
        <Box bg="blue.300">Saepe.</Box>
        <Box bg="blue.300">Ex.</Box>
        <Box bg="blue.300">Esse?</Box>
        <Box bg="blue.300">Quibusdam?</Box>
        <Box bg="blue.300">Quo.</Box>
        <Box bg="blue.300">Deserunt?</Box>
        <Box bg="blue.300">Deleniti?</Box>
        <Box bg="blue.300">Dolorum!</Box>
        <Box bg="blue.300">Amet.</Box>
        <Box bg="blue.300">Expedita!</Box>
        <Box bg="blue.300">Ut.</Box>
        <Box bg="blue.300">Id.</Box>
        <Box bg="blue.300">Dolorem!</Box>
        <Box bg="blue.300">Cumque?</Box>
        <Box bg="blue.300">Sed.</Box>
        <Box bg="blue.300">Ex.</Box>
        <Box bg="blue.300">Aut.</Box>
        <Box bg="blue.300">Eum.</Box>
        <Box bg="blue.300">Dolore!</Box>
        <Box bg="blue.300">Ullam!</Box>
        <Box bg="blue.300">Quas?</Box>
        <Box bg="blue.300">Distinctio.</Box>
        <Box bg="blue.300">Non!</Box>
        <Box bg="blue.300">Hic.</Box>
        <Box bg="blue.300">Necessitatibus.</Box>
        <Box bg="blue.300">Quo!</Box>
        <Box bg="blue.300">Porro.</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
