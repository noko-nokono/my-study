import { useState, useActionState } from 'react';
import { updateName } from '@/apis/update';
import { FormStatusItem } from './useFormStatusItem';

export const FormStatus = () => {
  const [name, setName] = useState("");
  const [state, submitAction] = useActionState(
    () => updateName({ id: "", name }),
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <FormStatusItem />
      {state && <p>{ state.name }</p>}
    </form>
  )
};