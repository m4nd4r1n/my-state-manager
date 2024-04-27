import type { CreateState } from './types';

import { useSyncExternalStore } from 'react';

import { createStore } from './store';

export const createStoreHook = <S>(createState: CreateState<S>) => {
  const store = createStore(createState);

  return <Selected>(selector: (state: S) => Selected) => {
    const getSelected = () => selector(store.read());
    return useSyncExternalStore(store.subscribe, getSelected);
  };
};
