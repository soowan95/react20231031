import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  return (
    <>
      <div>
        <a href={to[0]}>link</a>
      </div>
      <div>
        <Button onClick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App() {
  function func1() {
    console.log("func1 실행됨");
  }

  return (
    <>
      <MyComp to={["http://www.naver.com"]} someProp={func1}></MyComp>
    </>
  );
}

export default App;
