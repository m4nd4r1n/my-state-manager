import type { FC } from 'react';

import { useStore } from '../../stores';

interface ListDeleteButton {
  id: string;
}

const ListDeleteButton: FC<ListDeleteButton> = ({ id }) => {
  const deleteList = useStore((state) => state.deleteList);

  return (
    <button
      onClick={() => {
        deleteList(id);
      }}
    >
      X
    </button>
  );
};

export default ListDeleteButton;
