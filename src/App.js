import { List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "donkatzu", "hamburger", "kimchi"];
  const arr2 = ["son", "lee", "kim"];
  const arr3 = ["latte", "espresso", "capuchino"];
  const arr4 = [
    { id: 0, name: "latte" },
    { id: 1, name: "espresso" },
    { id: 2, name: "capuchino" },
  ];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <>
      <List mb={4}>{listItems} </List>
      <List mb={4}>
        {arr2.map((i, index) => (
          <ListItem key={index}>{i}</ListItem>
        ))}
      </List>
      <List>
        {arr3.map((i, index) => (
          <ListItem key={index}>{i}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
