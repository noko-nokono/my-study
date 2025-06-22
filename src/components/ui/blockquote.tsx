type Props = {
  children: React.ReactNode;
}

export const Blockquote = ({ children }: Props) => {
  return (
    <blockquote className="border-l-2 pl-6 italic">
      { children }
    </blockquote>
  )
}
