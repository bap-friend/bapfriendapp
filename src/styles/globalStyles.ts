import {StyleSheet} from 'react-native';
import {COLORS, SPACING, SHADOWS, TYPOGRAPHY, RADIUS} from '../constants/design';

export const globalStyles = StyleSheet.create({
  // 기본 컨테이너
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  
  // 중앙 정렬
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // 가로 배치
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // 카드 스타일
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    ...SHADOWS.md,
  },

  // 텍스트 스타일
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text.primary,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
  
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: TYPOGRAPHY.weights.medium,
    color: COLORS.text.secondary,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },

  // 버튼 스타일
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    ...SHADOWS.sm,
  },
});
