import { ROUTINE_OPTIONS } from '@/constants/RoutineOptions';
import type { Profile } from '@/types/Profile';

/**
 * 오늘의 요일을 영어 소문자로 반환합니다.
 * @returns 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
 */
export const getTodayDay = (): string => {
  return new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
};

/**
 * 프로필에서 오늘의 루틴 정보를 찾습니다.
 * @param profile - 사용자 프로필 정보
 * @returns 오늘의 루틴 정보 또는 undefined
 */
export const getTodayRoutine = (profile: Profile) => {
  const today = getTodayDay();
  return profile.dayRoutines.find((day) => day.day === today);
};

/**
 * 오늘의 루틴 이름을 한글로 반환합니다.
 * @param profile - 사용자 프로필 정보
 * @returns 오늘의 루틴 한글 이름 또는 undefined
 */
export const getTodayRoutineName = (profile: Profile): string | undefined => {
  const todayRoutine = getTodayRoutine(profile);
  return todayRoutine?.routine ? ROUTINE_OPTIONS[todayRoutine.routine as keyof typeof ROUTINE_OPTIONS] : undefined;
};

/**
 * 오늘의 루틴 정보를 한 번에 가져옵니다.
 * @param profile - 사용자 프로필 정보
 * @returns { today, todayRoutine, todayRoutineName }
 */
export const getTodayRoutineInfo = (profile: Profile) => {
  const today = getTodayDay();
  const todayRoutine = getTodayRoutine(profile);
  const todayRoutineName = getTodayRoutineName(profile);

  return {
    today,
    todayRoutine,
    todayRoutineName,
  };
};
