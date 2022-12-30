import styles from './input-base.module.scss';
import { InputSize, InputStatus } from './input-base.types';
import cn from 'classnames';
import { Spinner } from '../spinner';

export interface IInputBaseProps {
  label?: string;
  status?: InputStatus;
  size?: InputSize;
  bottomText?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  RightContent?: JSX.Element;
}

export const InputBase = ({ label, status, size, bottomText, isDisabled, isLoading, RightContent }: IInputBaseProps) => {
  return (
    <div className={cn(styles.inputBase)}>
      {label !== undefined && <span className={styles.inputBase__label}>{label}</span>}
      <div
        className={cn(styles.inputBase__wrapper, {
          [styles.inputBase__wrapper_defaultSize]: size === InputSize.Default,
          [styles.inputBase__wrapper_largeSize]: size === InputSize.Large,
          [styles.inputBase__wrapper_successStatus]: status === InputStatus.Succes,
          [styles.inputBase__wrapper_warningStatus]: status === InputStatus.Warning,
          [styles.inputBase__wrapper_errorStatus]: status === InputStatus.Error,
        })}>
        {(RightContent || isLoading) && (
          <div className={styles.inputBase__RightContentWrapper}>
            {RightContent && !isLoading ? RightContent : null}
            {isLoading && <Spinner size={30} />}
          </div>
        )}
      </div>
      {bottomText !== undefined && (
        <span
          className={cn(styles.inputBase__bottomText, {
            [styles.inputBase__bottomText_successStatus]: status === InputStatus.Succes,
            [styles.inputBase__bottomText_warningStatus]: status === InputStatus.Warning,
            [styles.inputBase__bottomText_errorStatus]: status === InputStatus.Error,
          })}>
          {bottomText}
        </span>
      )}
    </div>
  );
};
