import type { CreateState } from '@repo/store';
import type { CountState } from './count';

interface List {
  id: string;
  content: string;
}

export interface ListsState {
  lists: List[];
  addList: (list: List) => void;
  deleteList: (id: List['id']) => void;
}

export const createListsState: CreateState<
  ListsState & CountState,
  ListsState
> = (set) => ({
  lists: [],
  addList: (list) => set((state) => ({ lists: [...state.lists, list] })),
  deleteList: (id) =>
    set((state) => ({ lists: state.lists.filter((list) => list.id !== id) })),
});
