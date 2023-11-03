import { Button } from "@chakra-ui/react";

function App() {
  function func1() {
    console.log("func1 실행");
  }

  let func2 = () => {
    console.log("arrow function 실행 111");
  };

  return (
    <>
      <MyComp exeutceClick={func1}>Button1</MyComp>
      <MyComp exeutceClick={func2}>Button2</MyComp>
      <MyComp
        exeutceClick={() => {
          console.log("arrow function 실행 222");
        }}
      >
        Button3
      </MyComp>
      <MyComp exeutceClick={() => console.log("arrow function 실행333")}>
        Button4
      </MyComp>
    </>
  );
}

function MyComp({ children, exeutceClick }) {
  return (
    <>
      <Button onClick={exeutceClick}>{children}</Button>
    </>
  );
}

export default App;
