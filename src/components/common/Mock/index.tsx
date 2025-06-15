import { useState } from "react";

type Props = {
  children?: React.ReactNode;
}

export const Mock = (props: Props) => {
  const { children } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const initMocks = async () => {
    const { worker } = await import('../../../mock');
    return worker.start();
  };
  
  if (typeof window !== 'undefined') {
    initMocks().then(() => setIsLoaded(true));
  }

  return (
    <>
      {isLoaded && children}
    </>
  )
};