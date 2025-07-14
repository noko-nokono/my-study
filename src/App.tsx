import './App.css'
import Markdown from '@/components/common/Markdown';

const page = 
`
# [WIP] MyStudy

React や Next.js のバージョンアップやその挙動の確認を行うためのサイトです。
サイトの製作者が主にフロントエンドの技術周りの学習を行うために作られたため、感想程度の内容がほとんどだと思います。
また、気になった技術をただ触って試しているだけなので、全然更新されないかもしれません。

さらに、技術のアップデートに加えて、気になった記事などもまとめておこうと思っています。
SNS等で見かけてもそのまま読まずに流れていってしまったり、良かった記事を読み直そうとしてももう見つからなかったり、そういったこともなくせればと思っているので、記事をまとめておく場所としても活用しようと思います。
これもまた、全然更新されないかもしれないですが。

https://noko-nokono.vercel.app/
`;

function App() {
  return (
    <>
      <Markdown page={page} />
    </>
  )
}

export default App
