import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BasicBoxProps = Omit<MuiBoxProps, 'variant'> & {
  variant?: 'primary' | 'secondary';
};

export function BasicBox({ variant, ...props }: BasicBoxProps) {
  console.log({ variant });
  return <MuiBox {...props} />;
}

export type GenericBoxProps<C extends React.ElementType = 'div'> = Omit<
  MuiBoxProps<C, { component?: C }>,
  'variant'
> & {
  variant?: 'primary' | 'secondary';
};

export function GenericBox<C extends React.ElementType>({ variant, ...props }: GenericBoxProps<C>) {
  console.log({ variant });
  return <MuiBox {...props} />;
}
