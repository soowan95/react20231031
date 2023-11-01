import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";

// as로 named export 값을 import 할 때 별칭을 줄 수 있음

function App() {
  return (
    <>
      <MyBox />
      <h1>{address}</h1>
      <MyElem />
      <h1>{myAddress}</h1>
    </>
  );
}

export default App;
