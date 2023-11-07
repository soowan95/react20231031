import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person1, setPerson1] = useState({
    name: "son",
    city: "seoul",
    email: "son@gamil",
  });
  const [person2, updatePerson2] = useImmer({
    name: "lee",
    city: "busan",
    email: "lee@naver",
  });

  function handleNameChange1(e) {
    setPerson1({ ...person1, name: e.target.value });
  }

  function handleCityChange1(e) {
    setPerson1({ ...person1, city: e.target.value });
  }

  function handleEmailChange1(e) {
    setPerson1({ ...person1, email: e.target.value });
  }

  function handleNameChange2(e) {
    updatePerson2((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleCityChange2(e) {
    updatePerson2((draft) => {
      draft.city = e.target.value;
    });
  }

  function handleEmailChange2(e) {
    updatePerson2((draft) => {
      draft.email = e.target.value;
    });
  }

  return (
    <>
      <Box>
        <Input value={person1.name} onChange={handleNameChange1} />
        <Text>name : {person1.name}</Text>
        <Input value={person1.city} onChange={handleCityChange1} />
        <Text>city : {person1.city}</Text>
        <Input value={person1.email} onChange={handleEmailChange1} />
        <Text>email: {person1.email}</Text>
      </Box>

      <hr />

      <Box>
        <Input value={person2.name} onChange={handleNameChange2} />
        <Text>name : {person2.name}</Text>
        <Input value={person2.city} onChange={handleCityChange2} />
        <Text>city : {person2.city}</Text>
        <Input value={person2.email} onChange={handleEmailChange2} />
        <Text>email: {person2.email}</Text>
      </Box>
    </>
  );
}

export default App;
