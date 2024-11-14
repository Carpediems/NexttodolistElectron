import styled from "styled-components";
import { Flex } from "antd";
import React from "react";
import { MyIcon } from "@/app/component/MyIcon";

const HabitsDateBox = styled.div`
  width: 60px;
  height: 80px;
  background-color: #fafafa;
  border-radius: 100px;
  .Habits-Date {
    width: 100%;
    height: 100%;
    padding: 5px 0;
    background-color: #fafafa;
    p {
      width: 100%;
      height: 15px;
      line-height: 20px;
      font-size: 10px;
      text-align: center;
    }

    .Habits-Date-icon {
      width: 100%;
      height: 30px;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      //background-color: red;
    }
  }
  .Habits-Date:hover {
    background-color: #efefef;
    font-weight: 1000;
    cursor: pointer;
  }
  .Habits-Date:focus {
    background-color: #efefef;
    color: #4d77fa;
    font-size: 12px;
    font-weight: 1000;
  }
`;

interface HabitsDateProps {
  HabitsDateWeek: number;
  HabitsDateOn: number;
}

export default function HabitsDate(props: HabitsDateProps) {
  const Dates = (time: number) => {
    let datalist = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return datalist[props.HabitsDateWeek];
  };

  return (
    <HabitsDateBox>
      <Flex
        // @ts-ignore
        tabindex="1"
        justify="space-around"
        vertical
        className="Habits-Date"
      >
        <p>{Dates(props.HabitsDateWeek)}</p>
        <p style={{ fontSize: "13px" }}>{props.HabitsDateOn}</p>
        <MyIcon type="icon-step5-copy" className="Habits-Date-icon"></MyIcon>
      </Flex>
    </HabitsDateBox>
  );
}
