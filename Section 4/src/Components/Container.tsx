import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...otherProps
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...otherProps}>{children}</Component>;
}

export default Container;
