import { InputBase, InputSize, IInputBaseProps } from '../input-base';
import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './input.module.scss';
import cn from 'classnames';

export interface IInputProps
  extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'value' | 'type' | 'children'>,
    Omit<IInputBaseProps, 'children'> {
  value?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: string;
  className?: string; // В данном месте не указан ClassName у Мовсара
}

/**
 * @param label текст, который отображается над инпутом
 * @param status статус инпута, от которого зависит какого цвета обводка и нижний текст
 * @param size размер инпута. Default - высота 50px, Large - высота 60px
 * @param bottomText нижний текст
 * @param isDisabled заблокирован ли инпут
 * @param wrapperProps пропсы элемента, который оборачивает children
 * @param containerProps пропсы контейнера
 * @param isLoading флаг загрузки. Если true, то отображается спиннер и инуп заблокирован
 * @param RightContent контент справа от инпута
 */

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      bottomText,
      status,
      size = InputSize.Default,
      label,
      isDisabled,
      isLoading,
      RightContent,
      type = 'text',
      className,
      containerProps, // Почему containerProps мы указываем в пропсах а wrapperProps нет
      ...props
    },
    inputRef,
  ) => {
    return (
      <InputBase
        RightContent={RightContent}
        bottomText={bottomText}
        status={status}
        isDisabled={isDisabled}
        isLoading={isLoading}
        label={label}
        size={size}
        containerProps={containerProps}
        wrapperProps={{
          className: cn(styles.inputBase__wrapper, { [styles.inputBase__wrapper_rightIconProvided]: RightContent || isLoading }),
        }}>
        <input
          {...props}
          ref={inputRef}
          type={type}
          disabled={isDisabled || isLoading}
          className={cn(styles.input, className, {
            [styles.input__rightIconProvidedDefaultSize]: (isDisabled || isLoading) && size === InputSize.Default,
            [styles.input__rightIconProvidedLargeSize]: (isDisabled || isLoading) && size === InputSize.Large,
          })}
        />
      </InputBase>
    );
  },
);
