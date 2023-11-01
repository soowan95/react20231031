function App() {
  return (
    <>
      <h1
        className="note"
        style={{ backgroundColor: "blue", color: "white" }}
        title="제목 요소"
      >
        Lorem.
      </h1>
      <p title="문단 요소">Lorem ipsum dolor.</p>
      <MyComp title="내 컴포넌트" name="흥민" />
      <MyComp title="니 컴포넌트" name="강인" />
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property들이 객체 형태로 담김
function MyComp(pros) {
  console.log("MyComp가 받은 pros", pros);
  return (
    <div>
      <h1 title={pros.title}>hello {pros.name}</h1>
    </div>
  );
}

export default App;
