import { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App() {
  const [coffees, setCoffees] = useState(["latte"]);
  const [text, setText] = useState("");

  return (
    <>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button
        onClick={() => {
          const newCoffees = [...coffees, text];
          setCoffees(newCoffees);
        }}
      >
        추가
      </Button>

      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
