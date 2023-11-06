import { Box, Button, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }
  function handleRemoveButtonClick(index) {
    // const newFoods = [...foods];
    // newFoods.splice(index, 1);

    // const newFoods = foods.filter((item, i) => i != index);
    // setFoods(newFoods);

    setFoods(foods.filter((item, i) => i != index));
  }
  return (
    <>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림
      </Button>

      <Box>
        <UnorderedList>
          {foods.map((i, index) => (
            <ListItem key={index}>
              {i}{" "}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
