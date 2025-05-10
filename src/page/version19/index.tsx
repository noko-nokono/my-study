import './style.css';
import { Transition } from './component/useTransition';

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
        <Transition />
        <p>挙動</p>
        <p>useTransitionを使用することで非同期な更新処理に対してのpendingの状態を今までより簡単に管理できるようになる。</p>
      </div>

      <div>
        <h2>fugafuga</h2>
        <p>いいいい</p>
      </div>
    </div>
  )
};