import PageContext from '@/context/PageContext';
import DeveloperList from '@/components/DeveloperList';

export const metadata = {
  title: 'NW UI | 참여 개발자',
  description: 'NW UI 참여 개발자',
};

export default function DeveloperPage() {
  return (
    <PageContext>
      <DeveloperList />;
    </PageContext>
  );
}
