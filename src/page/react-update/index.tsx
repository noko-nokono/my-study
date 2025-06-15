import './style.css';
import { List } from '@/components/common/List';

const update = [
  { name: 'version-19', path: '/react-update/version-19' },
  { name: 'server-component', path: '/react-update/server-component' },
];

export const ReactUpdate = () => {
  return (
    <ul className='react_update_root'>
      <List list={update} />
    </ul>
  )
};