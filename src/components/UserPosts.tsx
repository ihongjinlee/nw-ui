import { User } from '@/model/user';
import PostList from './PostList';

type Props = {
  user: User;
};

export default function UserPosts({ user: { username } }: Props) {
  return <PostList apiUrl={`/api/users/${username}`} />;
}
