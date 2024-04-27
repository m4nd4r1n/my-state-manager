import { useSetCount } from '../../atoms/count.ts';
import { useSetNumbers } from '../../atoms/numbers.ts';
import { useSetPerson } from '../../atoms/person.ts';

const Buttons = () => {
  const setCount = useSetCount();
  const setPerson = useSetPerson();
  const setNumbers = useSetNumbers();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase count
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease count
      </button>
      <button
        onClick={() => setPerson((prev) => ({ ...prev, phone: '123-4567' }))}
      >
        Set phone number
      </button>
      <button
        onClick={() =>
          setNumbers((prev) => [...prev, Math.floor(Math.random() * 100) + 1])
        }
      >
        Add random number
      </button>
    </div>
  );
};

export default Buttons;
