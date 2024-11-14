"use client";

import { Button, Input, Select } from "antd";
import { MyIcon } from "@/app/component/MyIcon";
import HabitsFormTarget from "@/app/Habits/components/HabitsAddModal/HabitsFormTarget/HabitsFormTarget";
import HabitsFormRateSelect from "./HabitsFormRate/HabitsFormRate";

export const HabitsAddModalForm = [
  {
    HabitsAddModalFormIndex: 1,
    HabitsAddModalFormLabel: (
      <Button className="Habits-add-model-Form-icon">
        <MyIcon type="icon-backpack" />
      </Button>
    ),
    HabitsAddModalFormName: "username",
    HabitsAddModalFormComponent: <Input placeholder="每天进步一点点"></Input>,
  },
  {
    HabitsAddModalFormIndex: 2,
    HabitsAddModalFormLabel: "频率",
    HabitsAddModalFormName: "frequency",
    HabitsAddModalFormComponent: <HabitsFormRateSelect></HabitsFormRateSelect>,
  },
  {
    HabitsAddModalFormIndex: 3,
    HabitsAddModalFormLabel: "目标",
    HabitsAddModalFormName: "Target",
    HabitsAddModalFormComponent: (
      <Select
        defaultValue="当天完成打卡"
        dropdownStyle={{ width: "240px" }}
        dropdownRender={() => {
          return <HabitsFormTarget></HabitsFormTarget>;
        }}
      />
    ),
  },
  {
    HabitsAddModalFormIndex: 4,
    HabitsAddModalFormLabel: "开始日期",
    HabitsAddModalFormName: "StartDate",
    HabitsAddModalFormComponent: <Input></Input>,
  },
  {
    HabitsAddModalFormIndex: 5,
    HabitsAddModalFormLabel: "坚持天数",
    HabitsAddModalFormName: "PersistenceDays",
    HabitsAddModalFormComponent: <Input></Input>,
  },
  {
    HabitsAddModalFormIndex: 6,
    HabitsAddModalFormLabel: "所属分组",
    HabitsAddModalFormName: "Group",
    HabitsAddModalFormComponent: <Input></Input>,
  },
  {
    HabitsAddModalFormIndex: 7,
    HabitsAddModalFormLabel: "提醒",
    HabitsAddModalFormName: "remind",
    HabitsAddModalFormComponent: <Input></Input>,
  },
];
