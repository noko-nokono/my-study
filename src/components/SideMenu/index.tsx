import './style.css';
import { List } from '@/components/List';

export const SideMenu = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'React Update', path: '/react-update' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <aside className="side_menu">
      <ul className='menu_list'>
        <List list={menuItems} />
      </ul>
    </aside>
  );
};
