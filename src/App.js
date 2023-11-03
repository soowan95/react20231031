function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}

function App() {
  return (
    <>
      <MyComp text={"hello"} address={"seoul"}>
        some content 다른 컴포넌트가 있을 수도 있음.
      </MyComp>
    </>
  );
}

export default App;
