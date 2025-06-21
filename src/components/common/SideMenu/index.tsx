import { List } from '@/components/common/List';

export const SideMenu = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'React Update', path: '/react-update' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <aside className="min-w-70 min-h-[calc(100vh-60px-1px)] border-r border-gray-200">
      <ul className='flex flex-col gap-2 px-4 pt-4'>
        <List list={menuItems} />
      </ul>
    </aside>
  );
};
