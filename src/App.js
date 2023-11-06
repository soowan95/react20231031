function App() {
  // HOOK : use 로 시작하는 함수
  // HOOK 은 컴포넌트 상단에 작성해야 함.
  // 조건문이나, 반복문, 중첩된 함수안에 작성하면 안됨.

  if (true) {
    // HOOK 작정 불사
  }

  for (let i = 0; i < 3; i++) {
    // HOOK 작성 불가
  }

  function handle() {
    // HOOK 작성 불가
  }

  return <></>;
}

export default App;
