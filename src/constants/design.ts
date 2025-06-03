export const COLORS = {
  // Base Colors
  primary: '#FFD700', // 메인 노란색
  background: '#FFFFFF', // 기본 배경색
  surface: '#F5F5F5', // 카드나 섹션 배경
  border: '#E0E0E0', // 경계선
  // Text Colors
  text: {
    primary: '#1A1A1A',
    secondary: '#757575',
    disabled: '#BDBDBD',
  },

  // Status Colors
  status: {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFA000',
  },

  // Dark Mode Colors
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    border: '#333333',
  },

  // Opacity Variations
  opacity: {
    primary: {
      light: 'rgba(255, 215, 0, 0.1)',
      medium: 'rgba(255, 215, 0, 0.5)',
      dark: 'rgba(255, 215, 0, 0.8)',
    },
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 16,
  round: 999,
} as const;

export const TYPOGRAPHY = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  weights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  }
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 5,
  },
} as const;
