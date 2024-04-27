import type { Listener, Read, Subscribe, WritableAtom, Write } from './types';

export const atom = <S>(initialState: S): WritableAtom<S> => {
  const listeners = new Set<Listener<S>>();
  let state = initialState;

  const read: Read<S> = () => {
    return state;
  };

  const write: Write<S> = (nextState) => {
    if (Object.is(state, nextState)) return;

    state = nextState;
    listeners.forEach((listener) => listener(state));
  };

  const subscribe: Subscribe<S> = (listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  return { read, write, subscribe };
};
