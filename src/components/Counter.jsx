export default function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="counter">
        <button onClick={subtract}>–</button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}
