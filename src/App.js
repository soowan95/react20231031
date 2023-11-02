import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Select,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <Image src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize={"100px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image boxSize={"200px"} src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image
          boxSize={"200px"}
          borderRadius={"full"}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box>
        <Image src="123123/123" fallbackSrc="https://via.placeholder.com/150" />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  );
}

export default App;
