import React from 'react';
import { useFormStatus } from 'react-dom';

type submitButtonType = {
  children: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  className: string;
};

export default function SubmitButton({
  children,
  ...props
}: submitButtonType): React.ReactElement {
  const { pending } = useFormStatus();
  return <button {...props}>{pending ? 'Updating...' : children}</button>;
}
