import { useActionState } from 'react';

type FormState = { id: string; name: string };

export const ActionState = () => {
  const updateName = async (name: FormState | null): Promise<FormState> => {
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

  const [state, submitAction, isPending] = useActionState(updateName, null);

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {state && <p>{ state.name }</p>}
    </form>
  )
};