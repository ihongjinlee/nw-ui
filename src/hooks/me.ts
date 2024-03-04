import { User } from '@/model/user';
import useSWR from 'swr';

export default function useMe() {
  const { data: user, isLoading, error } = useSWR<User>('/api/me');
  return { user, isLoading, error };
}
