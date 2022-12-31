import cn from 'classnames';
import { CssVariable, getCssVariable } from '../../utils/get-css-variable';
import styles from './spinner.module.scss';

interface ISpinnerProps {
  size: number;
  thickness?: number;
  color?: CssVariable;
  className?: string;
}

/**
 *
 * @param size Размер спиннера
 * @param thickness Толщина спиннера
 * @param color Цвет Спиннера
 * @returns
 */

export const Spinner = ({ size, className, thickness = 5, color = CssVariable.ButtonOutlineColor, ...props }: ISpinnerProps) => {
  return (
    <span className={cn(styles.spinner, className)}>
      <span
        className={styles.spinner__after}
        style={{
          width: size,
          height: size,
          borderWidth: thickness,
          borderTopColor: getCssVariable(color),
        }}
      />
    </span>
  );
};
