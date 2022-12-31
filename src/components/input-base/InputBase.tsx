import styles from './input-base.module.scss';
import { InputSize, InputStatus } from './input-base.types';
import cn from 'classnames';
import { Spinner } from '../spinner';
import { getColorByInputStatus } from './input-base.utils';
import { CssVariable } from '../../utils/get-css-variable';
import { PropsWithChildren, HTMLAttributes } from 'react';

export interface IInputBaseProps extends PropsWithChildren {
  label?: string;
  status?: InputStatus;
  size?: InputSize;
  bottomText?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  RightContent?: JSX.Element;
  containerProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>; // Props фий? Мичар ений? сан ез?
  wrapperProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>; // Props фий? Мичар ений? сан ез?
}

/**
 * Компонент, который является корневым для компонентов Input, Dropdown, PhoneInput, PasswordInput
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param isLoading отображается ли загрузка
 * @param RightContent контент в правой части InputBase
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param containerProps пропсы контейнера
 */

export const InputBase = ({
  label,
  status,
  size,
  bottomText,
  isDisabled,
  isLoading,
  RightContent,
  children,
  wrapperProps,
  containerProps,
}: IInputBaseProps) => {
  return (
    <div {...containerProps} className={cn(styles.inputBase, containerProps?.className)}>
      {label !== undefined && <span className={styles.inputBase__label}>{label}</span>}
      <div
        {...wrapperProps}
        className={cn(styles.inputBase__wrapper, wrapperProps?.className, {
          [styles.inputBase__wrapper_defaultSize]: size === InputSize.Default,
          [styles.inputBase__wrapper_largeSize]: size === InputSize.Large,
          [styles.inputBase__wrapper_successStatus]: status === InputStatus.Success,
          [styles.inputBase__wrapper_warningStatus]: status === InputStatus.Warning,
          [styles.inputBase__wrapper_errorStatus]: status === InputStatus.Error,
          [styles.inputBase__wrapper_disabled]: isDisabled,
        })}>
        {children}
        {(RightContent || isLoading) && (
          <div className={styles.inputBase__rightContentWrapper}>
            {RightContent && !isLoading ? RightContent : null}
            {isLoading && (
              <Spinner size={30} color={status !== undefined ? getColorByInputStatus(status) : CssVariable.ButtonOutlineColor} />
            )}
          </div>
        )}
      </div>
      {bottomText !== undefined && (
        <span
          className={cn(styles.inputBase__bottomText, {
            [styles.inputBase__bottomText_successStatus]: status === InputStatus.Success,
            [styles.inputBase__bottomText_warningStatus]: status === InputStatus.Warning,
            [styles.inputBase__bottomText_errorStatus]: status === InputStatus.Error,
          })}>
          {bottomText}
        </span>
      )}
    </div>
  );
};
