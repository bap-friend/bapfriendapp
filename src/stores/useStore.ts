/**
 * 메모리 스토리지 (Zustand)
 */

import {create} from 'zustand';
import {storage, STORAGE_KEYS} from './storage';
import {ThemeMode} from '../types/theme';

interface AppState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => Promise<void>;
  initialize: () => Promise<void>;
}

export const useStore = create<AppState>((set) => ({
  theme: 'light',

  setTheme: async (theme) => {
    await storage.set(STORAGE_KEYS.THEME, theme);
    set({theme});
  },

  initialize: async () => {
    const savedTheme = await storage.get(STORAGE_KEYS.THEME);
    set({
      theme: savedTheme || 'light',
    });
  },
}));
