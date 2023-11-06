import { List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "donkatzu", "hamburger", "kimchi"];
  const arr2 = ["son", "lee", "kim"];
  const arr3 = ["latte", "espresso", "capuchino"];

  const listItems = arr.map((item) => <ListItem>{item}</ListItem>);

  return (
    <>
      <List mb={4}>{listItems} </List>
      <List mb={4}>
        {arr2.map((i) => (
          <ListItem>{i}</ListItem>
        ))}
      </List>
      <List>
        {arr3.map((i) => (
          <ListItem>{i}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
