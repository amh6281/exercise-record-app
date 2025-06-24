export const ROUTINE_CATEGORIES = {
  splitRoutines: [
    { label: '2분할', slug: 'two-split', emoji: '2️⃣' },
    { label: '3분할', slug: 'three-split', emoji: '3️⃣' },
    { label: 'PPL', slug: 'ppl-split', emoji: '3️⃣' },
    { label: '4분할', slug: 'four-split', emoji: '4️⃣' },
    { label: '5분할', slug: 'five-split', emoji: '5️⃣' },
  ],
  levelRoutines: [
    { label: '초보자', slug: 'beginner', emoji: '🎯' },
    { label: '중급자', slug: 'intermediate', emoji: '⚡' },
    { label: '고급자', slug: 'advanced', emoji: '🏆' },
  ],
  bodyPartRoutines: [
    { label: '가슴', slug: 'chest', emoji: '🏋️' },
    { label: '등', slug: 'back', emoji: '💪' },
    { label: '하체', slug: 'legs', emoji: '🦵' },
    { label: '어깨', slug: 'shoulders', emoji: '💪' },
    { label: '팔', slug: 'arms', emoji: '💪' },
    { label: '복근', slug: 'abs', emoji: '💪' },
    { label: '전신', slug: 'full-body', emoji: '💪' },
  ],
  bodybuilderRoutines: [
    { label: 'Arnold', slug: 'arnold', emoji: '👑' },
    { label: 'Dorian Yates', slug: 'dorian-yates', emoji: '🏆' },
    { label: 'Ronnie Coleman', slug: 'ronnie-coleman', emoji: '💪' },
    { label: 'Jay Cutler', slug: 'jay-cutler', emoji: '🔥' },
  ],
} as const;
