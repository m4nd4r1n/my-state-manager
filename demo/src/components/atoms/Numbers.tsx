import { useNumbersValue } from '../../atoms/numbers';

const Numbers = () => {
  const numbers = useNumbersValue();

  return (
    <div>
      <h3>Numbers (atom)</h3>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
