/**
 * 频率下拉框组件
 */
"use client";
import React, { useContext, useEffect, createContext, useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import {
  FormRateDay,
  FormRateInterval,
  FormRateWeek,
} from "@/app/Habits/components/HabitsAddModal/HabitsFormRate/component/HabitsFormRateComponent";
import { HabitsFormRateData } from "@/app/Habits/HabitsDateSource";
import CancelAndOk from "@/app/component/CancelAndOk";

const HabitsFormRateBox = styled.div`
  width: 250px;
  height: 160px;
  border-radius: 5px;
  padding: 10px 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .Form-Rate-select {
    width: 230px;
    height: 28px;
    .ant-select-selector {
      border: 1.5px solid #e8e8e8;
    }
  }
  .Form-Rate-Day {
    width: 100%;
    height: 60px;
  }
`;

function HabitsFormRate(props: object) {
  //   变更频率分组
  const [RateDays, setRateDays] = React.useState<string>("byDay");
  const HabitsFormRateChange = (value: { value: string; label: string }) => {
    setRateDays(value.value);
  };

  return (
    <HabitsFormRateBox>
      <Select
        labelInValue
        defaultValue={{ value: "byDay", label: "按天" }}
        className="Form-Rate-select"
        options={HabitsFormRateData}
        onChange={HabitsFormRateChange}
      ></Select>
      <div className="Form-Rate-Day">
        {RateDays == "byDay" && <FormRateDay></FormRateDay>}
        {RateDays == "byWeek" && <FormRateWeek></FormRateWeek>}
        {RateDays == "byTimeInterval" && <FormRateInterval></FormRateInterval>}
      </div>

      <CancelAndOk></CancelAndOk>
    </HabitsFormRateBox>
  );
}

export const HabitsFormRateContext = createContext(null);

const HabitsFormRateSelect = () => {
  const [FrequencyOKValue, setFrequencyOKValue] = useState<boolean>(false);

  const HabitsFormRateSelectChange = () => {
    setFrequencyOKValue(true);
  };

  return (
    <HabitsFormRateContext.Provider
      // @ts-ignore
      value={{ FrequencyOKValue, setFrequencyOKValue }}
    >
      <Select
        open={FrequencyOKValue}
        defaultValue="每天"
        dropdownStyle={{ width: "250px" }}
        onDropdownVisibleChange={HabitsFormRateSelectChange}
        dropdownRender={() => {
          return <HabitsFormRate></HabitsFormRate>;
        }}
      />
    </HabitsFormRateContext.Provider>
  );
};

export default HabitsFormRateSelect;
