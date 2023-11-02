import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea placeholder="본문을 작성하세요"></Textarea>
        </FormControl>
      </Box>
    </>
  );
}

export default App;
