import { atom, useAtomValue, useSetAtom } from '@repo/atom';

export const numbersAtom = atom([1, 2, 3, 4, 5]);
export const useNumbersValue = () => useAtomValue(numbersAtom);
export const useSetNumbers = () => useSetAtom(numbersAtom);
