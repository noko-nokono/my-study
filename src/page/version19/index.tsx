import './style.css';
import { Action } from './component/action';

export const Version19 = () => {
  return (
    <div className='version19_root'>
      <div className='version19_container'>
        <h1>React 19</h1>
        <a
          href="https://react.dev/blog/2024/12/05/react-19"
          target='_blank'
        >
          https://react.dev/blog/2024/12/05/react-19
        </a>
      </div>

      <div>
        <h2>Actions</h2>
        <Action />
      </div>

      <div>
        <h2>fugafuga</h2>
        <p>いいいい</p>
      </div>
    </div>
  )
};