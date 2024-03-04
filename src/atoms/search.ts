import { atom } from 'recoil';

export interface SearchState {
  text: string;
}

export const searchState = atom<SearchState>({
  key: 'searchState',
  default: { text: '' },
});
