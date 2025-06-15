type List = {
  name: string;
  path: string;
}

type Props = {
  list: List[];
}

export const List = (props: Props) => {
  const { list } = props;

  return (
    <>
      { list.map((item) => (
        <li>
          <a href={ item.path }>{ item.name }</a>
        </li>
      ))}
    </>
  )
};