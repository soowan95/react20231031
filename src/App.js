import { Button } from "@chakra-ui/react";

function App() {
  // 브라우저는 이벤트 핸들러 메소드에
  // event 객체를 parameter로 넣어줌
  function handleClick(e) {
    // console.log(e);
    console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.type);
  }

  return (
    <>
      <Button colorScheme="orange" onClick={handleClick}>
        button1
      </Button>
      <Button colorScheme="blue" onClick={handleClick}>
        button2
      </Button>
    </>
  );
}

export default App;
