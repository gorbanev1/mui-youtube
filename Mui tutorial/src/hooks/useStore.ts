import { create } from 'zustand';

type State = {
    locale: 'en' | 'ar';
};

type Actions = {
    changeLocale: (locale: State['locale']) => void;
};

export const useStore = create<State & Actions>((set) => ({
    locale: 'en',
    changeLocale: (locale) => set({ locale }),
}));
