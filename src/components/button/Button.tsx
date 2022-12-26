import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import { ButtonSize, ButtonVariant } from './button.types';
import { Ripple } from '../ripple/Ripple';
import { CssVariable } from '../../utils/get-css-variable';

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
        [styles.button_OutlineVariant]: variant === ButtonVariant.Outline,
      })}>
      {children}
      <Ripple color={variant === ButtonVariant.Outline ? CssVariable.SecondaryColor : CssVariable.ButtonRippleColor} />
    </button>
  );
};
