export const COLORS = {
  // Base Colors(레거시)
  primary: '#FFD700', // 메인 노란색
  background: '#FFFFFF', // 기본 배경색
  surface: '#F5F5F5', // 카드나 섹션 배경
  border: '#E0E0E0', // 경계선
  selected: '#111111',
  unselected: '#AAAAAA',

  // 라이트 모드 색상들
  light: {
    theme: 'light',
    background: '#F5F5F5', // 배경색
    surface: '#FFFFFF', // 표면 색상 (카드, 모달 등)
    text: '#111111', // 기본 텍스트 색상
    border: '#E0E0E0', // 경계선
    selected: '#111111', // 선택된 항목 색상
    unselected: '#999999', // 선택되지 않은 항목 색상
  },

  // 다크 모드 색상들
  dark: {
    theme: 'dark',
    background: '#222222', // 약간 회색이 섞인 다크 배경
    surface: '#333333', // 카드, 모달 등 표면 색상
    text: '#EEEEEE', // 기본 텍스트 색상
    border: '#3A3F47', // 경계선
    selected: '#EEEEEE', // 선택된 항목 색상 
    unselected: '#999999', // 선택되지 않은 항목 색상
  },


  // Text Colors (레거시)
  text: {
    primary: '#1A1A1A',
    secondary: '#757575',
    disabled: '#ADADAD',
  },

  // Status Colors
  status: {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFA000',
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

export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
} as const;
