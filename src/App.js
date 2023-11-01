// export된 컴포넌트를 import 해서 사용
import { MyElem } from "./component/MyElem";
import { MyComp } from "./component/MyComp";

function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

export default App;
