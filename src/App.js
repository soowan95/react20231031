import { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  // component 외부시스템과 작업할 때
  // 주로 ajax로 데이터 가져올 때

  // 첫번째 parameter : 실행할 함수
  // 두번째 parameter : 첫번째 parameter를 실행 시키는 값, 빈 배열이면 초기 rendering 때만 실행됨
  useEffect(() => {
    console.log("이펙트의 첫번째 파라미터 함수 실행됨");
  }, []);

  return (
    <>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </>
  );
}

export default App;
