import React, { useEffect, useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      console.log({ count });
    };
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <div>{count}</div>
    </div>
  );
};

export default Test;