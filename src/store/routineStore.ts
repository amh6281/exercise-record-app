import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SplitType = '전신' | '상체' | '하체' | '가슴' | '등' | '어깨' | '팔' | '복근' | '커스텀';

export interface Routine {
  id: string;
  name: string;
  split: SplitType;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface RoutineStore {
  routines: Routine[];
  selectedSplit: SplitType | null;

  // 분할 선택
  setSelectedSplit: (split: SplitType | null) => void;

  // 루틴 관리
  createRoutine: (name: string, split: SplitType, description?: string) => void;
  deleteRoutine: (id: string) => void;
  updateRoutine: (id: string, updates: Partial<Routine>) => void;

  // 유틸리티
  getRoutinesBySplit: (split: SplitType) => Routine[];
}

export const useRoutineStore = create<RoutineStore>()(
  persist(
    (set, get) => ({
      routines: [],
      selectedSplit: null,

      // 분할 선택
      setSelectedSplit: (split) => {
        set({ selectedSplit: split });
      },

      // 루틴 관리
      createRoutine: (name, split, description) => {
        const newRoutine: Routine = {
          id: crypto.randomUUID(),
          name,
          split,
          description,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        set((state) => ({
          routines: [...state.routines, newRoutine],
        }));
      },

      deleteRoutine: (id) => {
        set((state) => ({
          routines: state.routines.filter((routine) => routine.id !== id),
        }));
      },

      updateRoutine: (id, updates) => {
        set((state) => ({
          routines: state.routines.map((routine) =>
            routine.id === id ? { ...routine, ...updates, updatedAt: new Date() } : routine
          ),
        }));
      },

      getRoutinesBySplit: (split) => {
        return get().routines.filter((routine) => routine.split === split);
      },
    }),
    {
      name: 'routine',
    }
  )
);
