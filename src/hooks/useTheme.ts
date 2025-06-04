import {useColorScheme} from 'react-native';
import {useEffect} from 'react';
import {useStore} from '../stores/useStore';
import {COLORS} from '../constants/design';
import {ThemeMode} from '../types/theme';

export const useTheme = () => {
  const deviceTheme = useColorScheme();
  const {theme, setTheme} = useStore();

  // 디바이스 테마 변경 감지 및 적용
  useEffect(() => {
    if (deviceTheme) {
      setTheme(deviceTheme as ThemeMode);
    }
  }, [deviceTheme]);

  // 현재 테마의 전체 색상 스키마 반환
  const colors = theme === 'dark' ? COLORS.dark : COLORS.light;

  return {
    theme,
    colors,
    setTheme,
  };
};
