import type { Atom, SelectorRead } from './types';

import { atom } from './atom';

export const selector = <S>(read: SelectorRead<S>): Atom<S> => {
  const _atom = atom(undefined as S);
  const atoms = new Set<Atom<unknown>>();

  const get = <Value>(atom: Atom<Value>) => {
    if (!atoms.has(atom)) {
      atom.subscribe(() => _atom.write(read(get)));
      atoms.add(atom);
    }
    return atom.read();
  };

  _atom.write(read(get));

  return {
    read: _atom.read,
    subscribe: _atom.subscribe,
  };
};
