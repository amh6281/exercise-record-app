export interface RoutineDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number;
  target: string;
  exercises: {
    id: string;
    name: string;
    category: string;
    sets: number;
    reps: string;
    restTime: string;
    notes?: string;
  }[];
  tips?: string[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
}

export interface Routine {
  id: string;
  title: string;
  exercises: Exercise[];
}
