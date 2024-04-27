import { useCountValue, useDoubleCountValue } from '../../atoms/count';

const Count = () => {
  const count = useCountValue();
  const doubleCount = useDoubleCountValue();

  return (
    <div>
      <h3>Count (atom)</h3>
      <div>Count: {count}</div>
      <hr />
      <h3>Count x 2 (selector)</h3>
      <div>Count x 2: {doubleCount}</div>
    </div>
  );
};

export default Count;
