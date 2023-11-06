import { useImmer } from "use-immer";
import { Input, Text } from "@chakra-ui/react";

function App(props) {
  const [person, updatePerson] = useImmer({
    name: "son",
    address: { city: "seoul", country: "korea" },
  });

  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.address.city = e.target.value;
    });
  }

  function handleCountryChange(e) {
    updatePerson((draft) => {
      draft.address.country = e.target.value;
    });
  }

  return (
    <>
      <Input value={person.name} onChange={handleNameChange} />
      <Input value={person.address.city} onChange={handleCityChange} />
      <Input value={person.address.country} onChange={handleCountryChange} />
      <Text>
        {person.name}is live in {person.address.country}, {person.address.city}
      </Text>
    </>
  );
}

export default App;
