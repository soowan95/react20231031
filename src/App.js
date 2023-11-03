function App() {
  function handleClick(e) {
    // 브라우저가 해야하는 기본 기능을 취소함
    e.preventDefault();
    console.log("let do other work");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("let do other work");
  }
  return (
    <>
      <a href="https://www.naver.com" onClick={handleClick}>
        naver
      </a>
      <div>
        <form action="https://search.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </>
  );
}

export default App;
