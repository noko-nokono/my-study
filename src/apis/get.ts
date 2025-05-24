type User = {
  name: string;
};

export const getUser = async (): Promise<User> => {
  // 検証のため1秒間意図的に遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`https://noko_nokono.com/`, option);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};