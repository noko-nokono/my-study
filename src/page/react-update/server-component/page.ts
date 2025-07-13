export const page =
`
# ServerComponent

> This means libraries that ship with Server Components can now target React 19 as a peer dependency with a react-server export condition for use in frameworks that support the Full-stack React Architecture.

React version 19 で追加されたサーバーコンポーネントは、フレームワークで使用されることを前提として機能の追加になっています。

React Server Component では、Webサーバーを使用しないものと、使用するものの2つの種類が用意されており、一般的にサーバーコンポーネントとして言われているのはWebサーバーを使用する方になっています。

Webサーバーを使用しないものは、バックエンドサーバーを持たない環境でも使える仕組みになっており、そのコンポーネントはビルド時に事前に実行され、サーバーコンポーネントと同様の挙動としてクライアントにHTMLを返却します。

Webサーバーを使用するものは、バックエンドサーバーを使用してリクエスト毎にHTMLの生成と返却を行います。

以下公式ドキュメント
https://ja.react.dev/reference/rsc/server-components
`