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
import { useDispatch, useSelector } from "react-redux";

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

const HabitsFormRateSelect = () => {
  /**
   * title：展开下拉菜单的回调
   * 用于控制选择具体频率后改变相应面板
   */
  const dispatch = useDispatch();
  const openFrequency = useSelector(
    (state: any) => state.HabitsAddModal.frequency,
  );
  const HabitsFormRateSelectChange = () => {
    dispatch({ type: "frequencyChangeTrue" });
  };
  return (
    <Select
      open={openFrequency}
      defaultValue="每天"
      dropdownStyle={{ width: "250px" }}
      onDropdownVisibleChange={HabitsFormRateSelectChange}
      dropdownRender={() => {
        return <HabitsFormRate></HabitsFormRate>;
      }}
    />
  );
};

export default HabitsFormRateSelect;
