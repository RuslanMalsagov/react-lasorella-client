import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import { ButtonSize, ButtonVariant } from './button.types';
import { Ripple } from '../ripple/Ripple';
import { CssVariable } from '../../utils/get-css-variable';
import { Spinner } from '../spinner';

interface IButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: string | React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isShadow?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = ButtonVariant.Primary,
  isShadow,
  isDisabled,
  isLoading,
  className,
  size,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.button_primaryVariant]: variant === ButtonVariant.Primary,
        [styles.button_outlineVariant]: variant === ButtonVariant.Outline,
        [styles.button_smallSize]: size === ButtonSize.Small,
        [styles.button_largeSize]: size === ButtonSize.Large,
        [styles.button_disabled]: isDisabled || isLoading,
        [styles.button_shadow]: isShadow,
      })}>
      {children}
      {isLoading && <Spinner className={styles.button__spinner} size={30} />}
      <Ripple color={variant === ButtonVariant.Outline ? CssVariable.SecondaryColor : CssVariable.ButtonRippleColor} />
    </button>
  );
};
