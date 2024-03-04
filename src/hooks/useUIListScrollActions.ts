import { useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { uiListScrollState } from '../atoms/ui-list-scroll';

export default function useUIListScrollActions() {
  const set = useSetRecoilState(uiListScrollState);

  return useMemo(
    () => ({
      setScrollPosition: (position: number) => {
        set({ position });
      },
    }),
    [set]
  );
}
