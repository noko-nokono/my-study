import { useState, useTransition } from "react";
import { updateName } from '@/apis/update';
import { Input, Button } from '@/components/ui';

export const Transition = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const res = await updateName({id: "", name});
      if (!res.id) {
        setError(error);
        return;
      } 
    })
  };

  return (
    <div>
      <Input value={name} className="w-80" onChange={(event) => setName(event.target.value)} />
      <Button onClick={handleSubmit} disabled={isPending}>
        Update
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};