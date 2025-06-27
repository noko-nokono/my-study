import { useFormStatus } from "react-dom";
import { Button } from '@/components/ui';

export const FormStatusItem = () => {
  const {pending, data} = useFormStatus();
  console.log(data);

  return (
    <Button type="submit" disabled={pending}>Update</Button>
  )
};