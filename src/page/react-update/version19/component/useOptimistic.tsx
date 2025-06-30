import { useState, useOptimistic, startTransition } from 'react';
import { addName } from '@/apis/post';
import type { FormState } from '@/apis/update';
import { Input, Button } from '@/components/ui';

export const Optimistic = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState([{ id: "", name: "", isPending: false }]);
  const [optimistic, setOptimistic] = useOptimistic(state, (current, optimisticValue: FormState) => {
    return [...current, { id: "", name: optimisticValue.name, isPending: true }]
  });

  const handleSubmit = () => {
    setOptimistic({ id: "", name });
    startTransition(async () => {
      const res = await addName({ id: "", name });
      setState((prev) => [...prev, { ...res, isPending: false }]);
    })
  };

  return (
    <form action={handleSubmit}>
      <div className="flex gap-2">
        <Input type="text" className="w-80" value={name} onChange={(e) => setName(e.target.value)} />
        <Button type="submit">Update</Button>
      </div>
      { optimistic.map((item) => (
        <p key={item.id}>{ item.name } { item.isPending ? "Pending" : "Done" }</p>
      ))}
    </form>
  );
};