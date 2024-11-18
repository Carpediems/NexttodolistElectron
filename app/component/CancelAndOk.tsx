"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Flex } from "antd";
import styled from "styled-components";
import HabitsFormRateSelect, {
  HabitsFormRateContext,
} from "@/app/Habits/components/HabitsAddModal/HabitsFormRate/HabitsFormRate";

const CancelAndOkBox = styled(Flex)`
  width: 100%;
  height: 70px;
  padding: 10px 0;
  margin-top: 5px;
  .Habits-Icon-footer_determine,
  .Habits-Icon-footer_cancel {
    width: 100px;
    height: 28px;
    border-radius: 5px;
    border: none;
  }
  .Habits-Icon-footer_determine {
    background-color: #3967ff;
    color: white;
  }
  .Habits-Icon-footer_cancel {
    background-color: #ffffff;
    color: #757575;
    border: 1.5px solid #d1d1d1;
  }
`;

const CancelAndOk = ({ Width = "100px", Height = "28px" }) => {
  let { FrequencyOKValue, setFrequencyOKValue }: any = useContext(
    HabitsFormRateContext,
  ) || { FrequencyOKValue: true };

  // 确定
  const FrequencyOK = () => {
    setFrequencyOKValue(false);
  };
  // 取消
  const FrequencyCancel = () => {
    setFrequencyOKValue(false);
  };
  return (
    <CancelAndOkBox
      className="Habits-Icon-footer"
      justify="space-around"
      wrap
      gap="small"
    >
      <button
        className="Habits-Icon-footer_determine"
        style={{ width: Width, height: Height }}
        onClick={FrequencyOK}
      >
        确定
      </button>
      <button
        className="Habits-Icon-footer_cancel"
        style={{ width: Width, height: Height }}
        onClick={FrequencyCancel}
      >
        取消
      </button>
    </CancelAndOkBox>
  );
};

export default CancelAndOk;
