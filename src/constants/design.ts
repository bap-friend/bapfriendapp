export const COLORS = {
  // Base Colors(레거시)
  primary: '#FFD700', // 메인 노란색
  red: '#F44336', // 경고나 에러 표시용 빨간색
  status0background: 'rgba(255, 204, 0, 0.15)',
  status0text: '#FF8400', // 모집중 상태 텍스트 색상
  status1background: 'rgba(76, 217, 100, 0.15)',
  status1text: '#4CA664', // 확정 상태 텍스트 색상
  status2background: 'rgba(142, 142, 147, 0.15)',
  status2text: '#8E8E93', // 종료 상태 텍스트 색상


  // 라이트 모드 색상들
  light: {
    theme: 'light',
    lv0: '#F5F5F5', // 배경색
    lv1: '#FFFFFF', // 표면 색상 (카드, 모달 등)
    text: '#111111', // 기본 텍스트 색상
    border: '#E0E0E0', // 경계선
    selected: '#111111', // 선택된 항목 색상
    unselected: '#999999', // 선택되지 않은 항목 색상
  },

  // 다크 모드 색상들
  dark: {
    theme: 'dark',
    lv0: '#333333', // 약간 회색이 섞인 다크 배경
    lv1: '#222222', // 카드, 모달 등 표면 색상
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
