function App() {
  const myStyle = {
    color: "blue",
    fontSize: "3rem",
    backgroundColor: "gold",
    textAlign: "center",
  };

  return (
    <>
      {/* style 속성은 객체로 주어야 함 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "2rem" }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
