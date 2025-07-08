import { List } from '@/components/common/List';

export const SideMenu = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'React Update', path: '/react-update' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <aside className="min-w-60 min-h-[calc(100vh-200px-1px)] border border-gray-200 rounded-[50px]">
      <ul className='flex flex-col gap-2 px-4 pt-8'>
        <List list={menuItems} />
      </ul>
    </aside>
  );
};
