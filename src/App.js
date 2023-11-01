function App() {
  return (
    <>
      <MyComp name="흥민" address="신촌" age={33} city="서울" />
      <MyComp address="강남" age={22} city="부산" />
    </>
  );
}

function MyComp({ name = "강인", address, city, age }) {
  return (
    <div>
      <p>
        {name}은 {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
