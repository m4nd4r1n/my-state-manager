import { usePersonValue, usePersonWithAgeValue } from '../../atoms/person';

const Person = () => {
  const person = usePersonValue();
  const personWithAge = usePersonWithAgeValue();

  return (
    <div>
      <h3>Person (atom)</h3>
      <ul>
        <li>name: {person.name}</li>
        <li>phone: {person.phone}</li>
      </ul>
      <hr />
      <h3>Person with count (selector)</h3>
      <ul>
        <li>name: {personWithAge.name}</li>
        <li>phone: {personWithAge.phone}</li>
        <li>count: {personWithAge.count}</li>
      </ul>
    </div>
  );
};

export default Person;
