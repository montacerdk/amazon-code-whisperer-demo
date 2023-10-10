import React, { FunctionComponent } from "react";

export const Counter: FunctionComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click +</button>
      <button onClick={() => setCount(count - 1)}>Click -</button>
    </div>
  );
};
