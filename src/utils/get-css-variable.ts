export enum CssVariable {
  PrimaryColor,
  ButtonRippleColor,
}

const cssVariableNames = {
  [CssVariable.PrimaryColor]: '--PrimaryColor',
  [CssVariable.ButtonRippleColor]: '--RippleColor',
};

/**
 * Возвращает строку в формате var(--cssVariable)
 * @param variable Цвет, для которого нужно получить строку с css-переменной
 * @returns Строка c css-переменной. Пример: var(--PrimaryColor)
 * @example getCssVariable(CssVariable.PrimaryColor)
 */

export function getCssVariable(variable: CssVariable): string {
  return `var(${cssVariableNames[variable]})`;
}
