type FormState = { id: string; name: string };

export const updateName = async (data: FormState | null): Promise<FormState> => {
  // 検証のため1秒間意図的に遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const option = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data } ),
  };

  const response = await fetch(`https://noko_nokono.com/`, option);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};