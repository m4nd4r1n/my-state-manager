import { useStore } from '../../stores';

const Buttons = () => {
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const increaseBy = useStore((state) => state.increaseBy);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase count
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Decrease count
      </button>
      <button
        onClick={() => {
          increaseBy(4);
        }}
      >
        +4
      </button>
      <button
        onClick={() => {
          increaseBy(-4);
        }}
      >
        -4
      </button>
    </div>
  );
};

export default Buttons;
