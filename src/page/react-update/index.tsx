import './style.css';

const update = [
  { name: 'version-19', path: '/react-update/version-19' },
  { name: 'server-component', path: '/react-update/server-component' },
];

export const ReactUpdate = () => {
  return (
    <ul className='react_update_root'>
      {update.map((item) => (
        <li>
          <a href={ item.path }>{ item.name }</a>
        </li>
      ))}
    </ul>
  )
};