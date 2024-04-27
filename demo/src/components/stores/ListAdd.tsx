import type { FormEventHandler } from 'react';

import { useStore } from '../../stores';

const ListAdd = () => {
  const addList = useStore((state) => state.addList);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get('content') as string;
    if (!content) return;
    addList({ id: crypto.randomUUID(), content });
    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='content' type='text' placeholder='Input content' />
        <button type='submit'>add</button>
      </form>
    </div>
  );
};

export default ListAdd;
