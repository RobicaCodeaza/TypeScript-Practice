import { ComponentPropsWithoutRef, type PropsWithChildren } from 'react';

type InputProps = PropsWithChildren<{
  label: string;
  id: string;
}> &
  ComponentPropsWithoutRef<'input'>;

function Input({ label, id, children, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props}>
        {children}
      </input>
    </p>
  );
}

export default Input;
