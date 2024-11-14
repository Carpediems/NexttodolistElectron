// 标题图标
import React from "react";
import styled from "styled-components";
import { Flex } from "antd";
import { IconFontTitle } from "@/app/Habits/components/HabitsAddModal/HabitsFormIcon/IconFontTitle";
import { MyIcon } from "@/app/component/MyIcon";

export default function HabitsIcon() {
  return (
    <HabitsIconBox>
      <div className="HabitsIcon-checked">
        <Flex
          justify="space-between"
          align="center"
          className="Habits-Icon-checked"
        >
          <p>图</p>
          <p>文</p>
        </Flex>
      </div>
      <Flex className="Habits-Icon-content" wrap justify="flex-start" gap={5}>
        {IconFontTitle.map((item) => {
          return (
            <p key={item.IconFontTitleID}>
              <MyIcon type={item.IconFontTitle}></MyIcon>
            </p>
          );
        })}
      </Flex>
      <Flex className="Habits-Icon-footer" justify="flex-end" wrap gap="small">
        <button className="Habits-Icon-footer_determine">确定</button>
        <button className="Habits-Icon-footer_cancel">取消</button>
      </Flex>
    </HabitsIconBox>
  );
}

const HabitsIconBox = styled.div`
  width: 410px;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  .HabitsIcon-checked {
    width: 100%;
    height: 70px;
    padding: 2px 15px;
    border-bottom: 2px solid #f4f4f4;
    .Habits-Icon-checked {
      width: 85px;
      height: 100%;
    }
    .Habits-Icon-checked div,
    p {
      width: 40px;
      height: 40px;
      line-height: 40px;
      background-color: #9a6e3a;
      border-radius: 50%;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
    }
  }
  .Habits-Icon-content {
    width: 100%;
    height: calc(100% - 140px);
    //height: 100%;
    overflow: auto;
    padding: 12px 0 12px 6px;
    p {
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      border-radius: 50%;
      //background-color: #f5f5f5;
      //background-color: red;
      font-size: 35px;
    }
  }
  .Habits-Icon-content::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  .Habits-Icon-content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: transparent;
  }
  .Habits-Icon-content:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d4d6d9;
  }
  .Habits-Icon-content::-webkit-scrollbar-track-piece {
    background-color: #fff;
    border-radius: 10px;
  }
  .Habits-Icon-footer {
    width: 100%;
    height: 70px;
    padding: 15px 15px 0 0;
    margin-top: 5px;
    border-top: 2px solid #f1f1f1;
    .Habits-Icon-footer_determine,
    .Habits-Icon-footer_cancel {
      width: 120px;
      height: 30px;
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
      border: 2px solid #d1d1d1;
    }
  }
`;
