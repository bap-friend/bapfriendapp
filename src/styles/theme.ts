import { COLORS } from '../constants/design';

export const theme = {
  light: {
    background: COLORS.background,
    text: COLORS.text.primary,
    textSecondary: COLORS.text.secondary,
    textDisabled: COLORS.text.disabled,
    primary: COLORS.primary,
    surface: COLORS.surface,
    border: COLORS.border,
  },
  dark: {
    background: COLORS.dark.background,
    text: COLORS.dark.text,
    textSecondary: COLORS.text.secondary,
    textDisabled: COLORS.text.disabled,
    primary: COLORS.primary, // 노란색은 다크모드에서도 동일하게 유지
    surface: COLORS.dark.surface,
    border: COLORS.dark.border,
  },
};
