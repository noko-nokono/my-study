import './style.css';
import { Transition } from './component/useTransition';
import { ActionState } from './component/useActionState';
import { FormStatus } from './component/useFormStatus';
import { Optimistic } from './component/useOptimistic';
import { UseParent } from './component/useParent';

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
        <p>[メモ]</p>
        <p>useTransitionを使用することで、非同期な更新処理に対してのpendingの状態を今までより簡単に管理できるようになる。</p>
        <p>[document]</p>
        <a href='https://ja.react.dev/reference/react/useTransition' target='_blank'>https://ja.react.dev/reference/react/useTransition</a>
      </div>

      <div>
        <p>useActionState</p>
        <ActionState />
        <p>[メモ]</p>
        <p>useActionStateを使用することで、フォームの値の管理を簡略化してくれる。</p>
        <p>useTransitionを包括する形で説明されていたので、基本はこちらを使うことになりそう？</p>
        <p>[document]</p>
        <a href='https://ja.react.dev/reference/react/useActionState' target='_blank'>https://ja.react.dev/reference/react/useActionState</a>
      </div>

      <div>
        <p>useFormStatus</p>
        <FormStatus />
        <p>[メモ]</p>
        <p>子要素にpropsとしてフォームのデータを渡すのではなく、カスタムフックといて機能を提供してくれている。</p>
        <p>[document]</p>
        <a href='https://ja.react.dev/reference/react-dom/hooks/useFormStatus' target='_blank'>https://ja.react.dev/reference/react-dom/hooks/useFormStatus</a>
      </div>

      <div>
        <p>useOptimistic</p>
        <Optimistic />
        <p>[メモ]</p>
        <p>非同期の更新を行う際に楽観的な評価を行い、APIのレスポンスの前に入力された値を表示する。</p>
        <p>[document]</p>
        <a href='https://ja.react.dev/reference/react/useOptimistic' target='_blank'>https://ja.react.dev/reference/react/useOptimistic</a>
      </div>

      <div>
        <p>use</p>
        <UseParent />
        <p>[メモ]</p>
        <p>非同期のデータ取得を行なってくれる（fetch関数の代わりみたいなイメージ）。Suspenseを使用することで、データ取得中はローディング画面を表示することができる。</p>
        <p>[document]</p>
        <a href='https://ja.react.dev/reference/react/use' target='_blank'>https://ja.react.dev/reference/react/use</a>
      </div>
    </div>
  )
};