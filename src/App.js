import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          <Box>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Lorem.</Th>
                  <Th>Saepe?</Th>
                  <Th>At.</Th>
                  <Th>Fugit.</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Lorem ipsum dolor sit.</Td>
                  <Td>Deleniti incidunt non tempore?</Td>
                  <Td>Deserunt incidunt reiciendis suscipit.</Td>
                  <Td>Aut ducimus eligendi sunt!</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>Lorem ipsum dolor sit.</Td>
                  <Td>Adipisci culpa iusto tempore!</Td>
                  <Td>Debitis molestias tempore veritatis.</Td>
                  <Td>At praesentium ullam veritatis?</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
