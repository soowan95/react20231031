import { Button } from "@chakra-ui/react";

function App() {
  function handleClickFirstButton() {
    console.log("first button is clicked");
  }
  function handleClickSecondButton() {
    console.log("second button is clicked");
  }
  function handleClickTwoButton(number) {
    if (number === 3) {
      console.log(number + "rd button is clicked");
    } else {
      console.log(number + "th button is clicked");
    }
  }

  return (
    <>
      <Button onClick={handleClickFirstButton}>button1</Button>
      <Button onClick={handleClickSecondButton}>button2</Button>
      <Button onClick={() => handleClickTwoButton(3)}>button3</Button>
      <Button onClick={() => handleClickTwoButton(4)}>button4</Button>
    </>
  );
}

export default App;
