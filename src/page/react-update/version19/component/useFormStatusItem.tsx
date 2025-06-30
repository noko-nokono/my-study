import { useFormStatus } from "react-dom";
import { Button } from '@/components/ui';

export const FormStatusItem = () => {
  const {pending} = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>Update</Button>
  )
};