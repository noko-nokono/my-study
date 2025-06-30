import { useState, useActionState } from 'react';
import { updateName } from '@/apis/update';
import { Input, Button } from '@/components/ui';

export const ActionState = () => {
  const [name, setName] = useState("");
  const [state, submitAction, isPending] = useActionState(
    () => updateName({ id: "", name }),
    { id: "", name }
  );

  return (
    <form action={submitAction}>
      <div className="flex gap-2">
        <Input type="text" name="name" className="w-80" value={name} onChange={(e) => setName(e.target.value)} />
        <Button type="submit" disabled={isPending}>Update</Button>
      </div>      
      {state && <p>{ state.name }</p>}
    </form>
  )
};