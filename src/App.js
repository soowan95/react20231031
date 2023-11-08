import { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log(color + " : initial render");
  }, []);

  console.log(color + " : re-render");

  return (
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  // 부모가 rendering될 때 자식도 rendering됨.
  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  const [goldToggle, setGoldToggle] = useState(true);

  console.log("parent re-render");

  return (
    <div>
      <Box>
        <Text>부모</Text>
        <Button onClick={() => setNumber(number + 1)}>증가</Button>
        <Text>{number}</Text>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setSecondToggle(e.target.checked)}
        />
        파란 박스 토글
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setGoldToggle(e.target.checked)}
        />
        골드 박스 토글
      </Box>
      <Box mt={5}>
        <Text>자식들</Text>
        <MyComp color={"red"} />
        {secondToggle && <MyComp color={"blue"} />}
        <Box display={goldToggle ? "block" : "none"}>
          <MyComp color={"gold"} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
