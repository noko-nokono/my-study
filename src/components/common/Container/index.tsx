type Props = {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;

  return (
    <div className='m-4'>
      { children }
    </div>
  )
};