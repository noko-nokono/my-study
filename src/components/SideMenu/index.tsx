import './style.css';

export const SideMenu = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'React Update', path: '/react-update' },
  ];

  return (
    <aside className="side_menu">
      <ul className='menu_list'>
        {menuItems.map((item) => (
          <li>
            <a href={ item.path }>{ item.name }</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
