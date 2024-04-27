import type {
  CreateStore,
  Listener,
  Read,
  Subscribe,
  Updater,
  Write,
} from './types';

const isUpdater = <S>(
  value: S | Partial<S> | Updater<S>,
): value is Updater<S> => typeof value === 'function';

export const createStore: CreateStore = (createState) => {
  type S = ReturnType<typeof createState>;

  const listeners = new Set<Listener<S>>();
  let state: S;

  const write: Write<S> = (partialState) => {
    const nextState = isUpdater(partialState)
      ? partialState(state)
      : partialState;

    if (Object.is(state, nextState)) return;

    state = Object.assign({}, state, nextState);
    listeners.forEach((listener) => listener(state));
  };

  const read: Read<S> = () => state;

  const subscribe: Subscribe<S> = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const api = { write, read, subscribe };

  state = createState(write, read, api);

  return api;
};
