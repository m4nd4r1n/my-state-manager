import { atom, selector, useAtomValue, useSetAtom } from '@repo/atom';

import { countAtom } from './count.ts';

interface Person {
  name: string;
  phone?: string;
}

export const personAtom = atom<Person>({ name: 'John' });
export const usePersonValue = () => useAtomValue(personAtom);
export const useSetPerson = () => useSetAtom(personAtom);

interface PersonWithCount extends Person {
  count: number;
}

export const personWithAgeAtom = selector<PersonWithCount>((get) => {
  const person = get(personAtom);
  const count = get(countAtom);

  return {
    ...person,
    count,
  };
});
export const usePersonWithAgeValue = () => useAtomValue(personWithAgeAtom);
