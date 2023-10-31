function App() {
  return (
    <div>
      <h1>hello react</h1>
      <h2>hi react</h2>
      <MyComp />
    </div>
  );
}

// built-in component는 소문자로 시작
// component 명은 대문자로 시작
// return 문을 가져야함
// return 값은 보통 JSX 코트
function MyComp() {
  // return 에 JSX 코드 작성 가능
  // 꼭 하나의 root tag가 존재해야 함
  // return 값이 여러 줄이면 ()로 감싸야 함
  // root tag가 필요 없다면 fragment 사용 가능

  // JSX에서 주석 사용법
  // {/* */}
  return <h1>hi component</h1>;
}

export default App;
