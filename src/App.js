import { useEffect, useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("excute code");
    // setNumber(number + 1);
  }, [number]);
  return <div></div>;
}

export default App;
