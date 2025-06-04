/**
 * 디바이스 로컬 영구 저장소 (AsyncStorage)
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  THEME: '@theme',
} as const;

export const storage = {
  async get(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading data:', error);
      return null;
    }
  },

  async set(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  },

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  },
};
