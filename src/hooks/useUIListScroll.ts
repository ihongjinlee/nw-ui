import { useRecoilValue } from 'recoil';
import { uiListScrollState } from '../atoms/ui-list-scroll';

export default function useUIListScroll() {
  const uiListScroll = useRecoilValue(uiListScrollState);
  return uiListScroll.position;
}
