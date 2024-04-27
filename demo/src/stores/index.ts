import type { CountState } from './count';
import type { ListsState } from './lists';

import { createStoreHook } from '@repo/store';

import { createCountState } from './count';
import { createListsState } from './lists';

export const useStore = createStoreHook<CountState & ListsState>((...args) => ({
  ...createCountState(...args),
  ...createListsState(...args),
}));
