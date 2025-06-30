import { useState, useActionState } from 'react';
import { updateName } from '@/apis/update';
import { FormStatusItem } from './useFormStatusItem';
import { Input } from '@/components/ui';

export const FormStatus = () => {
  const [name, setName] = useState("");
  const [state, submitAction] = useActionState(
    () => updateName({ id: "", name }),
    null
  );

  return (
    <form action={submitAction}>
      <div className="flex gap-2">
        <Input type="text" name="name" className="w-80" value={name} onChange={(e) => setName(e.target.value)} />
        <FormStatusItem />
      </div>
      {state && <p>{ state.name }</p>}
    </form>
  )
};