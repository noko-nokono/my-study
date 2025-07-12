// 仮の実装
export const page =
`# React 19

公式ドキュメント
https://react.dev/blog/2024/12/05/react-19`

export const useTransitionPage =
`### useTransition
https://ja.react.dev/reference/react/useTransition

バックグラウンドで UI の一部をレンダリングできる React Hook です。
本来は、React 18 のバージョンで追加されましたが、React 19 で非同期処理でも使用できるよう拡張が行われました。
簡単に説明すると、非同期の処理が完了するまでの待機状態（pending）を管理してくれます。
`;

export const useActionStatePage =
`### useActionState
https://ja.react.dev/reference/react/useActionState

フォームアクションの結果に基づいて状態を更新できる React Hook です。
データの更新を行う際に、その更新結果や状態を使用する場合に活用することができる機能になっています。
簡単に説明すると、データ更新を行うためのデータ本体や更新処理、待機状態などを管理してくれます。
`;

export const useFormStatusPage =
`### useFormStatus
https://ja.react.dev/reference/react-dom/hooks/useFormStatus

フォーム送信のステータス情報を提供する React Hook です。
<form>タグを使用したフォームの送信を行う際に、そのフォームの更新状態を子要素でも取得できるようになる機能になっております。
簡単に説明すると、<form>タグを使用したフォームの送信の待機状態をpropsでバケツリレーせずとも、useFromStateで取得することができます。
`;

export const useOptimisticPage =
`### useOptimistic
https://ja.react.dev/reference/react/useOptimistic

UI を楽観的に更新できる React Hook です。
非同期処理を行う場合に、処理成功後の状態を先にUIに反映を行う機能になっております。
簡単に説明すると、更新を行う際にサーバーに送信するデータを先にUIに反映し、更新結果を即座にユーザーが見れる状態にすることができます。
`;

export const useParentPage =
`### use
https://ja.react.dev/reference/react/use

Promise などのリソースの値を読み取ることができる React API です。
Suspense の配下で使用でき、async/awaitを使用せずに非同期の処理を行なってくれるような機能になっております。
簡単に説明すると、Suspenseの配下でデータの取得を行う際、useを使うことで簡単に非同期の実装を行うことができます。
`;