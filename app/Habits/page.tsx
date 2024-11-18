// 习惯
"use client";
import styled from "styled-components";
import { Button, Flex } from "antd";
import React, { useEffect, useState } from "react";
import HabitsDate from "@/app/Habits/components/HabitsDate/HabitsDate";
import HabitsAddModal from "@/app/Habits/components/HabitsAddModal/HabitsAddModal";
import { MyIcon } from "@/app/component/MyIcon";
import { HabitsDateSource } from "@/app/Habits/HabitsDateSource";

const HabitsBox = styled.main`
  width: calc(100% - 50px);
  height: calc(100% - 35px);
  .Habits-Left-box {
    width: 63%;
    height: 100%;
    background-color: #fafafa;
    .Habits-Timeline {
      width: 100%;
      height: 30px;
      background-color: #fafafa;
      .Habits-Timeline-Text {
        width: 50px;
        height: 30px;
      }
      .Habits-Timeline-iconText {
        width: 120px;
        height: 30px;
        .ant-btn {
          height: 30px;
          background-color: #fafafa;
        }
        .ant-btn:hover {
          background-color: #ececec;
        }
      }
      .Habits-Timeline-Date {
        width: 100%;
        height: 100px;
        background-color: #fafafa;
        padding: 10px 15px;
      }
    }
  }
`;

export default function HabitsPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Test = (data: boolean) => {
    setIsModalVisible(data);
  };

  return (
    <HabitsBox>
      <div className="Habits-Left-box">
        <div className="Habits-Timeline">
          <Flex justify="space-between">
            <h3 className="Habits-Timeline-Text">习惯</h3>
            <Flex className="Habits-Timeline-iconText" justify="space-between">
              <Button icon={<MyIcon type="icon-liebiao" />}></Button>
              <Button
                icon={<MyIcon type="icon-tianjia" />}
                onClick={() => setIsModalVisible(true)}
              ></Button>
              <HabitsAddModal
                isAddModel={isModalVisible}
                callbackFunc={Test}
              ></HabitsAddModal>
              <Button icon={<MyIcon type="icon-gengduo" />}></Button>
            </Flex>
          </Flex>

          <Flex justify="space-between" className="Habits-Timeline-Date">
            {HabitsDateSource.map((item) => (
              <HabitsDate
                key={item.HabitsDateId}
                HabitsDateWeek={item.HabitsDateWeek}
                HabitsDateOn={item.HabitsDateOn}
              ></HabitsDate>
            ))}
          </Flex>
        </div>
      </div>
    </HabitsBox>
  );
}
