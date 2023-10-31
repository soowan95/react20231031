function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
}

function MyComponent1 () {
  return (
    <div>
      <h1>Hello Componenet</h1>
    </div>
  );
}

function MyComponent2 () {
  return (
    <>
      <p>Lorem ipsum dolor sit.</p>
      <ul>
        <li>Lorem.</li>
        <li>Sequi!</li>
        <li>Nesciunt.</li>
      </ul>
    </>
  )
}

export default App;
