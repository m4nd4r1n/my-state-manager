export type Read<S> = () => S;

export type Listener<S> = (state: S) => void;

export type Subscribe<S> = (listener: Listener<S>) => () => void;

export type Write<S> = (state: S) => void;

export interface Atom<S> {
  read: Read<S>;
  subscribe: Subscribe<S>;
}

export interface WritableAtom<S> extends Atom<S> {
  write: Write<S>;
}

type Getter = <S>(atom: Atom<S>) => S;
export type SelectorRead<S> = (get: Getter) => S;

export type Updater<S> = (prevState: S) => S;
