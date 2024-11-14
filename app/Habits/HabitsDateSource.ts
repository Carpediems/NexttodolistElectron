interface HabitsDateSourceType {
  HabitsDateId: number;
  HabitsDateWeek: number;
  HabitsDateOn: number;
}

interface HabitsFormRateDataType {
  value: string;
  label: string;
}

export const HabitsDateSource: HabitsDateSourceType[] = [
  {
    HabitsDateId: 1,
    HabitsDateWeek: (new Date().getDay() - 6 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 6,
  },
  {
    HabitsDateId: 2,
    HabitsDateWeek: (new Date().getDay() - 5 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 5,
  },
  {
    HabitsDateId: 3,
    HabitsDateWeek: (new Date().getDay() - 4 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 4,
  },
  {
    HabitsDateId: 4,
    HabitsDateWeek: (new Date().getDay() - 3 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 3,
  },
  {
    HabitsDateId: 5,
    HabitsDateWeek: (new Date().getDay() - 2 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 2,
  },
  {
    HabitsDateId: 6,
    HabitsDateWeek: (new Date().getDay() - 1 + 7) % 7,
    HabitsDateOn: new Date().getDate() - 1,
  },
  {
    HabitsDateId: 7,
    HabitsDateWeek: new Date().getDay(),
    HabitsDateOn: new Date().getDate(),
  },
];

//
export const HabitsFormRateData: HabitsFormRateDataType[] = [
  { value: "byDay", label: "按天" },
  { value: "byWeek", label: "按周" },
  { value: "byTimeInterval", label: "按时间间隔" },
];
