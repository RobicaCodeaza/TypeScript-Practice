import {
  ComponentPropsWithoutRef,
  forwardRef,
  type PropsWithChildren,
} from 'react';

type InputProps = PropsWithChildren<{
  label: string;
  id: string;
}> &
  ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, children, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref}>
        {children}
      </input>
    </p>
  );
});

export default Input;
