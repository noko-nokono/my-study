import { List } from '@/components/common/List';
import Markdown from '@/components/common/Markdown';
import { page } from './page';

const update = [
  { name: 'version-19', path: '/react-update/version-19' },
  { name: 'server-component', path: '/react-update/server-component' },
];

export const ReactUpdate = () => {
  return (
    <ul className='flex flex-col gap-2'>
      <Markdown page={ page } />
      <List list={update} />
    </ul>
  )
};