import { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [myState, setMyState] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub1")
      .then(({ data }) => setMyState(data))
      .catch((e) => console.log(e));
  }, []);
  return <div>{myState}</div>;
}

export default App;
