import { useState, useOptimistic, useCallback } from 'react';
import { updateName } from '@/apis/update';
import type { FormState } from '@/apis/update';

export const Optimistic = () => {
  const [name, setName] = useState("");
  const state = { id: "", name: name };
  const [optimistic, setOptimistic] = useOptimistic(state, (current, optimisticValue) => {
    return {
      ...current,
      ...optimisticValue as FormState,
    }
  });

  const handleSubmit = useCallback(async () => {
    setOptimistic({ id: "", name });
    await updateName(optimistic);
  }, [name, optimistic, setOptimistic]);

  return (
    <form action={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Update</button>
      <p>{ optimistic.name }</p>
    </form>
  );
};