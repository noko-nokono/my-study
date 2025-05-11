import { useActionState } from 'react';
import { updateName } from '@/apis/update';
import { FormStatusItem } from './useFormStatusItem';

export const FormStatus = () => {
  const [state, submitAction] = useActionState(updateName, null);
  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <FormStatusItem />
      {state && <p>{ state.name }</p>}
    </form>
  )
};