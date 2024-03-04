import { atom } from 'recoil';

export interface UIListScrollState {
  position: number;
}

export const uiListScrollState = atom<UIListScrollState>({
  key: 'uiListScrollState',
  default: { position: 0 },
});
