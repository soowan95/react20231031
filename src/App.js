import { Box, FormControl, Select } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요.">
            <option value="value1">Lorem.</option>
            <option value="value2">Molestiae.</option>
            <option value="value3">Sint.</option>
            <option value="value4">Excepturi.</option>
            <option value="value5">Commodi?</option>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default App;
