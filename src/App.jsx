import React from "react";
import { Counter } from "./components/Counter";
import Articles from "./components/Articles/Articles";
{
  /*Number counter with increase and decrease function*/
}
function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Articles />
      </div>
    </>
  );
}

export default App;
