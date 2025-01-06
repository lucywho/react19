import React from 'react';
import { useFormStatus } from 'react-dom';

type submitButtonType = {
  children: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  className: string;
};

export default function SubmitButton({ children, ...props }: submitButtonType) {
  const { pending } = useFormStatus();
  return <button {...props}>{pending ? 'Updating...' : children}</button>;
}
