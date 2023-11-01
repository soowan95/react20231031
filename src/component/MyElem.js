// named export
export function MyElem() {
  return (
    <div>
      <h1>MY ELEMENT</h1>
    </div>
  );
}

// named export
export const address = "seoul";

// default export
// 이름은 정해져 있지 않음
// 한 파일에 하나만 가능
const age = 33;
export default age;
