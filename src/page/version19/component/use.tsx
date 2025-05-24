import { use } from 'react';

type Props = {
  user: Promise<{name: string}>;
}

export const Use = ({ user }: Props) => {
  const value = use(user);

  return (
    <p>{ value.name }</p>
  )
};