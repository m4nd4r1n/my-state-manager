import Buttons from './Buttons';
import Count from './Count';
import ListAdd from './ListAdd.tsx';
import Lists from './Lists';

const Stores = () => {
  return (
    <div>
      <Buttons />
      <Count />
      <hr />
      <div>
        <h3>Lists (store)</h3>
        <ListAdd />
        <Lists />
      </div>
    </div>
  );
};

export default Stores;
