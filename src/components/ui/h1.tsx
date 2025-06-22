type Props = {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      { children }
    </h1>
  )
}
