import { useState, useActionState } from 'react';
import { updateName } from '@/apis/update';

export const ActionState = () => {
  const [name, setName] = useState("");
  const [state, submitAction, isPending] = useActionState(
    () => updateName({ id: "", name }),
    { id: "", name }
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" disabled={isPending}>Update</button>
      {state && <p>{ state.name }</p>}
    </form>
  )
};