import React, { useEffect, useState } from 'react';
import { CssVariable, getCssVariable } from '../../utils/get-css-variable';
import styles from './ripple.module.scss';

type TRippleItem = {
  x: number;
  y: number;
  size: number;
};

type TRippleProps = {
  duration?: number;
  color?: CssVariable;
};

/**
 * @param duration Скорость волны. Пример: duration={800}
 * @param color Цвет волны. Пример: color={CssVariable.PrimaryColor}
 * @example <Ripple duration={800} color={CssVariable.PrimaryColor}/>
 * @returns
 */

export function Ripple({ duration = 850, color = CssVariable.ButtonRippleColor }: TRippleProps) {
  const [rippleArray, setRippleArray] = useState<TRippleItem[]>([]);

  const addRipple = (e: React.MouseEvent) => {
    
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = e.pageX - rippleContainer.left - size / 2;
    const y = e.pageY - rippleContainer.top - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };
    setRippleArray([...rippleArray, newRipple]);
  };

  useEffect(() => {
    let bounce: number | undefined;
    if (rippleArray.length > 0) {
      window.clearTimeout(bounce);
      bounce = window.setTimeout(() => {
        setRippleArray([]);
        window.clearTimeout(bounce);
      }, 800);
    }
    return () => window.clearTimeout(bounce);
  }, [rippleArray.length]);
  
  return (
    <div onMouseDown={addRipple} className={styles.ripple_container}>
      {rippleArray.length !== 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className={styles.ripple}
              key={index}
              style={{
                animationDuration: `${duration}ms`,
                backgroundColor: `${getCssVariable(color)}`,
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
}
