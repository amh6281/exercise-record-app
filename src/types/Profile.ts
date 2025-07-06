interface DayRoutine {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  routine: string;
}

export interface Profile {
  nickname: string;
  splitType: '3-split' | '4-split' | '5-split' | 'full-body';
  dayRoutines: DayRoutine[];
  isCustomMode: boolean;
}
