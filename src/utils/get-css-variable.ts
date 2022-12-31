export enum CssVariable {
  PrimaryColor,
  SecondaryColor,
  ButtonOutlineColor,
  ButtonRippleColor,
  SuccessColor,
  WarningColor,
  ErrorColor,
  TextColor,
  TextColorGray,
  BackgroundBodyColor,
}

const cssVariableNames = {
  [CssVariable.PrimaryColor]: '-primaryColor',
  [CssVariable.ButtonRippleColor]: '--rippleColor',
  [CssVariable.ButtonOutlineColor]: '--buttonOutlineColor',
  [CssVariable.SecondaryColor]: '--secondaryColor',
  [CssVariable.SuccessColor]: '--successColor',
  [CssVariable.WarningColor]: '--warningColor',
  [CssVariable.ErrorColor]: '--errorColor',
  [CssVariable.TextColor]: '--textColor',
  [CssVariable.TextColorGray]: '--textColorGray',
  [CssVariable.BackgroundBodyColor]: '--backgroundBodyColor',
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
