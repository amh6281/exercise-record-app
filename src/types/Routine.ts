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
  estimatedTime: number;
  target: string;
  exercises: Exercise[];
  tips?: string[];
}
