import { atom, selector, useAtomValue, useSetAtom } from '@repo/atom';

export const countAtom = atom(0);
export const useCountValue = () => useAtomValue(countAtom);
export const useSetCount = () => useSetAtom(countAtom);

export const doubleCountAtom = selector((get) => 2 * get(countAtom));
export const useDoubleCountValue = () => useAtomValue(doubleCountAtom);
