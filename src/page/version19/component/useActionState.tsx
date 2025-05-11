import { useActionState } from 'react';
import { updateName } from '@/apis/update';

export const ActionState = () => {
  const [state, submitAction, isPending] = useActionState(updateName, null);

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {state && <p>{ state.name }</p>}
    </form>
  )
};