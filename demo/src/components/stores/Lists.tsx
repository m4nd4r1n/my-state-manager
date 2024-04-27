import { useStore } from '../../stores';
import ListDeleteButton from './ListDeleteButton';

const Lists = () => {
  const lists = useStore((state) => state.lists);

  return (
    <ul>
      {lists.map(({ id, content }) => (
        <li key={id}>
          {content} <ListDeleteButton id={id} />
        </li>
      ))}
    </ul>
  );
};

export default Lists;
