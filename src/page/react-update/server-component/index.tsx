export const ServerComponent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl'>ServerComponent</h2>
      <p> This means libraries that ship with Server Components can now target React 19 as a peer dependency with a react-server export condition for use in frameworks that support the Full-stack React Architecture.</p>
      <p>
        React version 19 で追加されたサーバーコンポーネントは、フレームワークで使用されることを前提として機能の追加になっている。
        <br />
        React Server Component では、Webサーバーを使用しないものと、使用するものの2つの種類が用意されており、一般的にサーバーコンポーネントとして言われているのはWebサーバーを使用する方。
      </p>
      <p>使用しないものは、ビルド時に</p>
      <p>
        <a href="https://ja.react.dev/reference/rsc/server-components" target='_blank'>https://ja.react.dev/reference/rsc/server-components</a>
      </p>
    </div>
  )
};