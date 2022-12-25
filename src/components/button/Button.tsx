import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import { ButtonSize, ButtonVariant } from './button.types';

interface IButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: string | React.ReactNode;
}

export const Button = ({ children, variant = ButtonVariant.Primary, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={cn(styles.button, {
        [styles.button_PrimaryVariant]: variant === ButtonVariant.Primary,
      })}>
      {children}
    </button>
  );
};
