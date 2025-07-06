export const SPLIT_LABELS = {
  '3-split': '3분할',
  '4-split': '4분할',
  '5-split': '5분할',
  'full-body': '무분할 (전신)',
};

export const ROUTINE_LABELS = {
  rest: '휴무',
  chest: '가슴',
  back: '등',
  legs: '하체',
  shoulders: '어깨',
  biceps: '이두',
  triceps: '삼두',
  arms: '팔',
  'chest-triceps': '가슴/삼두',
  'back-biceps': '등/이두',
  'chest-shoulders': '가슴/어깨',
  'full-body': '전신',
  abs: '복부',
  cardio: '유산소',
};

// 분할별 SelectBox 기본 설정 값 (초기 설정 값)
export const DEFAULT_ROUTINES = {
  'full-body': [
    { day: 'monday', routine: 'full-body' },
    { day: 'tuesday', routine: 'full-body' },
    { day: 'wednesday', routine: 'full-body' },
    { day: 'thursday', routine: 'full-body' },
    { day: 'friday', routine: 'full-body' },
    { day: 'saturday', routine: 'cardio' },
    { day: 'sunday', routine: 'rest' },
  ],
  '3-split': [
    { day: 'monday', routine: 'chest-triceps' },
    { day: 'tuesday', routine: 'back-biceps' },
    { day: 'wednesday', routine: 'legs' },
    { day: 'thursday', routine: 'rest' },
    { day: 'friday', routine: 'chest-triceps' },
    { day: 'saturday', routine: 'back-biceps' },
    { day: 'sunday', routine: 'legs' },
  ],
  '4-split': [
    { day: 'monday', routine: 'chest-triceps' },
    { day: 'tuesday', routine: 'back-biceps' },
    { day: 'wednesday', routine: 'shoulders' },
    { day: 'thursday', routine: 'legs' },
    { day: 'friday', routine: 'rest' },
    { day: 'saturday', routine: 'chest-triceps' },
    { day: 'sunday', routine: 'back-biceps' },
  ],
  '5-split': [
    { day: 'monday', routine: 'chest' },
    { day: 'tuesday', routine: 'back' },
    { day: 'wednesday', routine: 'shoulders' },
    { day: 'thursday', routine: 'legs' },
    { day: 'friday', routine: 'arms' },
    { day: 'saturday', routine: 'rest' },
    { day: 'sunday', routine: 'rest' },
  ],
} as const;

// 분할별 SelectBox 선택 가능 옵션 값
export const LIMITED_ROUTINE_OPTIONS = {
  'full-body': {
    'full-body': '전신',
    cardio: '유산소',
    rest: '휴무',
  },
  '3-split': {
    'chest-triceps': '가슴/삼두',
    'back-biceps': '등/이두',
    legs: '하체/어깨',
    rest: '휴무',
  },
  '4-split': {
    'chest-triceps': '가슴/삼두',
    'back-biceps': '등/이두',
    shoulders: '어깨',
    legs: '하체',
    rest: '휴무',
  },
  '5-split': {
    chest: '가슴',
    back: '등',
    shoulders: '어깨',
    legs: '하체',
    arms: '팔',
    rest: '휴무',
  },
} as const;

// 분할별 설명 텍스트
export const SPLIT_DESCRIPTIONS = {
  'full-body': '매일 전신을 운동하는 방식입니다. 초보자에게 추천합니다.',
  '3-split': '상체, 하체를 3일 주기로 나누어 운동하는 방식입니다.',
  '4-split': '가슴/삼두, 등/이두, 어깨, 하체를 4일 주기로 나누어 운동하는 방식입니다.',
  '5-split': '각 부위를 5일 주기로 세분화하여 운동하는 방식입니다. 중급자 이상에게 추천합니다.',
} as const;

// 기본 분할 옵션
export const BASIC_SPLIT_OPTIONS = {
  '3-split': '3분할',
  '4-split': '4분할',
  '5-split': '5분할',
  'full-body': '무분할 (전신)',
} as const;
