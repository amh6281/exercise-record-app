import { Routine } from '@/types/Routine';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RoutineStore {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  updateRoutine: (id: string, routine: Partial<Routine>) => void;
  removeRoutine: (id: string) => void;
  setRoutines: (routines: Routine[]) => void;
}

export const useRoutineStore = create<RoutineStore>()(
  persist(
    (set) => ({
      routines: [],
      addRoutine: (routine: Routine) => set((state) => ({ routines: [...state.routines, routine] })),
      updateRoutine: (id: string, routine: Partial<Routine>) =>
        set((state) => ({ routines: state.routines.map((r) => (r.id === id ? { ...r, ...routine } : r)) })),
      removeRoutine: (id: string) => set((state) => ({ routines: state.routines.filter((r) => r.id !== id) })),
      setRoutines: (routines: Routine[]) => set({ routines }),
    }),
    {
      name: 'routines-storage',
    }
  )
);
