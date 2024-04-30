import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...props },
  ref
) {
  const form = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current!.reset();
      },
    };
  });

  function handleSUbmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSUbmit} ref={form} {...props}>
      {children}
    </form>
  );
});

export default Form;
