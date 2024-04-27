import type { CreateState } from '@repo/store';
import type { ListsState } from './lists';

export interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (amount: number) => void;
}

export const createCountState: CreateState<
  CountState & ListsState,
  CountState
> = (set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseBy: (amount) => set((state) => ({ count: state.count + amount })),
});
