import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Profile } from '@/types/Profile';

interface ProfileStore {
  profile: Profile;
  setProfile: (profile: Partial<Profile>) => void;
}

const defaultProfile: Profile = {
  nickname: '',
  splitType: '3-split',
  dayRoutines: [],
  isCustomMode: false,
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: defaultProfile,

      setProfile: (profile: Partial<Profile>) =>
        set((state) => ({
          profile: { ...state.profile, ...profile },
        })),
    }),
    {
      name: 'profile-storage',
    }
  )
);
