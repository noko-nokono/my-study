import { useFormStatus } from "react-dom";

export const FormStatusItem = () => {
  const {pending, data} = useFormStatus();
  console.log(data);

  return (
    <button type="submit" disabled={pending}>Update</button>
  )
};