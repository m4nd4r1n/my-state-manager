import type { Atom, Updater, WritableAtom } from './types';

import { useSyncExternalStore } from 'react';

export const useAtomValue = <S>(atom: Atom<S>) => {
  return useSyncExternalStore(atom.subscribe, atom.read);
};

const isUpdater = <S>(value: S | Updater<S>): value is Updater<S> =>
  typeof value === 'function';

export const useSetAtom = <S>(atom: WritableAtom<S>) => {
  return (value: S | Updater<S>) => {
    if (!('write' in atom)) {
      throw new Error('not writable atom');
    }
    if (isUpdater(value)) {
      atom.write(value(atom.read()));
    } else {
      atom.write(value);
    }
  };
};

export const useAtom = <S>(atom: WritableAtom<S>): [S, (value: S) => void] => {
  return [useAtomValue(atom), useSetAtom(atom)];
};
