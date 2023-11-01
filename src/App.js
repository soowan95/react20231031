import {
  MyBox,
  MyElem,
  MyContainer,
  name,
  address,
  person,
} from "./component/MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
