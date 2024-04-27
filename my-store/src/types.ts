export type Updater<S> = (state: S) => S | Partial<S>;

export type Write<S> = (partialState: S | Partial<S> | Updater<S>) => void;

export type Read<S> = () => S;

export type Listener<S> = (state: S) => void;

export type Subscribe<S> = (listener: Listener<S>) => () => void;

export interface Store<S> {
  write: Write<S>;
  read: Read<S>;
  subscribe: Subscribe<S>;
}

export type CreateState<S, R = S> = (
  set: Write<S>,
  get: Read<S>,
  store: Store<S>,
) => R;

export type CreateStore = <S>(createState: CreateState<S>) => Store<S>;
