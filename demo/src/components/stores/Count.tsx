import { useStore } from '../../stores';

const Count = () => {
  const count = useStore((state) => state.count);

  return (
    <div>
      <h3>Count (store)</h3>
      <div>Count: {count}</div>
    </div>
  );
};

export default Count;
