import { Atoms } from './components/atoms';
const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        width: '100%',
        gap: '1rem',
      }}
    >
      <Atoms />
    </div>
  );
};

export default App;
