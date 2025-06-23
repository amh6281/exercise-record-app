type Exercise = {
  id: string;
  name: string;
  category: string;
  sets: number;
  reps: string;
  restTime: string;
  notes?: string;
};

export interface RoutineDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // 분 단위
  exercises: Exercise[];
  tips?: string[];
}
