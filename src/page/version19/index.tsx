import './style.css';
import { Action } from './component/action';

const useTransitionDescription = `
  [説明]
  useTransitionを使用することで非同期な更新処理に対してのpendingの状態を今までより簡単に管理できるようになる。
  [疑問]
  1. なぜ公式ドキュメントでは更新という所だけで記載されているのかはわからない。
  2. 非同期遷移という用語が使われているが、遷移がどのように意味を成すのかわからない。
`

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
        <p>めも</p>
        <p>{ useTransitionDescription }</p>
      </div>

      <div>
        <h2>fugafuga</h2>
        <p>いいいい</p>
      </div>
    </div>
  )
};