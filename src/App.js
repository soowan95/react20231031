import { Button } from "@chakra-ui/react";

function App() {
  // 함수명 작성 관습
  // handle이벤트명
  function handleClick() {
    console.log("second");
  }
  function handleMouseEnter() {
    console.log("third");
  }
  function handleMouseLeave() {
    console.log("fourth");
  }

  return (
    <>
      <Button onClick={() => console.log("first")}>button1</Button>
      <Button onClick={handleClick}>button2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        button3
      </Button>
    </>
  );
}

export default App;
