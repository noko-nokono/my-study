import './style.css';
import { Transition } from './component/useTransition';
import { ActionState } from './component/useActionState';
import { FormStatus } from './component/useFormStatus';

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
        <p>useTransition</p>
        <Transition />
        <p>メモ</p>
        <p>useTransitionを使用することで、非同期な更新処理に対してのpendingの状態を今までより簡単に管理できるようになる。</p>
      </div>

      <div>
        <p>useActionState</p>
        <ActionState />
        <p>メモ</p>
        <p>useActionStateを使用することで、フォームの値の管理を簡略化してくれる。</p>
        <p>useTransitionを包括する形で説明されていたので、基本はこちらを使うことになりそう？</p>
      </div>

      <div>
        <p>useFormStatus</p>
        <FormStatus />
        <p>メモ</p>
        <p>子要素にpropsとしてフォームのデータを渡すのではなく、カスタムフックといて機能を提供してくれている</p>
      </div>
    </div>
  )
};