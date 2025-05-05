import { useState, useTransition } from "react";

export const Action = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateName = async (name: string): Promise<{ id: string; name: string }> => {
    // 検証のため1秒間意図的に遅延させる
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mock: { name } }),
    };

    const response = await fetch(`https://noko_nokono.com/`, option);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const res = await updateName(name);
      if (!res.id) {
        setError(error);
        return;
      } 
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