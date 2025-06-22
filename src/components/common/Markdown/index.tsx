import { H1, H2, H3, Blockquote } from '@/components/ui';

type Props = {
  page: string;
}

const Markdown = ({ page }: Props) => {
  // マークダウンの文字列をJSXに変換する関数
  const parseMarkdown = (text: string): React.ReactNode[] => {
    // 改行で分割
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // h3 (###)
      if (trimmedLine.startsWith('###')) {
        const content = trimmedLine.substring(3).trim();
        return <H3 key={index}>{content}</H3>;
      }
      
      // h2 (##)
      if (trimmedLine.startsWith('##')) {
        const content = trimmedLine.substring(2).trim();
        return <H2 key={index}>{content}</H2>;
      }
      
      // h1 (#)
      if (trimmedLine.startsWith('#')) {
        const content = trimmedLine.substring(1).trim();
        return <H1 key={index}>{content}</H1>;
      }

      if (trimmedLine.startsWith('>')) {
        const content = trimmedLine.substring(1).trim();
        return <Blockquote key={index}>{content}</Blockquote>;
      }

      if (trimmedLine.startsWith('https:')) {
        return <a href={trimmedLine} target='_blank' key={index}>{trimmedLine}</a>;
      }
      
      // 空行の場合は改行
      if (trimmedLine === '') {
        return <br key={index} />;
      }
      
      // 通常のテキスト
      return <p key={index}>{trimmedLine}</p>;
    });
  };

  return (
    <div className="markdown-content">
      {parseMarkdown(page)}
    </div>
  );
};

export default Markdown;