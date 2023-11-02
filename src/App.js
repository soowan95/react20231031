import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <FormControl>
          <Flex align={"center"}>
            <FormLabel>알림을 받으시겠습니까?</FormLabel>
            <Switch />
          </Flex>
        </FormControl>
      </Box>
    </>
  );
}

export default App;
