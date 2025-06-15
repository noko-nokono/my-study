import './style.css';

type Props = {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;

  return (
    <div className='container'>
      { children }
    </div>
  )
};