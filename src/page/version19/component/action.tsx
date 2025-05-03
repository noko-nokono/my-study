import { useState, useTransition } from "react";

// ditto
export const Action = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateName = async (name: string) => {
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mock: { name } }),
   };

    const response = await fetch(`https://api.getpostman.com/mocks/`, option);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      } 
      // redirect("/path");
    })
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};