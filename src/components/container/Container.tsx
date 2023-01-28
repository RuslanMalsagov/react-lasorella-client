import { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './container.module.scss';

interface IContainerProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Container = ({ className, ...props }: IContainerProps) => {
  return <div {...props} className={cn(styles.container, className)} />;
};
