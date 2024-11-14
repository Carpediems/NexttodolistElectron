/**
 * 目标Target下拉框组件
 */
import React from "react";
import { Checkbox, Flex, Form, Input, Select } from "antd";
import styled from "styled-components";

const TargetDropDownDiv = styled.div`
  width: 240px;
  border-radius: 5px;
  padding: 15px 10px 0 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  .ant-checkbox-wrapper {
    font-size: 12px;
    .ant-checkbox-inner {
      border-radius: 0;
      border: 1.5px solid #bebebe;
    }
  }
  .TargetDropDown-Select {
    width: 180px;
    height: 25px;
    border-radius: 0;
    margin-top: 15px;
    .ant-select-selector {
      border-radius: 2px;
      border: 1px solid #bebebe;
    }
    .select-drop-down-platform {
      width: 360px;
    }
  }
  .Habits-Icon-footer {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    margin-top: 20px;
    .Habits-Icon-footer_determine,
    .Habits-Icon-footer_cancel {
      width: 100px;
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

function HabitsFormTarget(props: object) {
  return (
    <TargetDropDownDiv>
      <Flex vertical={true} gap={10}>
        <Checkbox>当天完成打卡</Checkbox>
        <Checkbox>当天完成一定量</Checkbox>
      </Flex>
      <Select
        dropdownStyle={{ width: "240px" }}
        defaultValue="每天1次"
        className="TargetDropDown-Select"
        dropdownRender={() => {
          return (
            <CompleteACertainAmountOnTheSameDay></CompleteACertainAmountOnTheSameDay>
          );
        }}
      ></Select>
      <Flex
        className="Habits-Icon-footer"
        justify="space-around"
        wrap
        gap="small"
      >
        <button className="Habits-Icon-footer_determine">确定</button>
        <button className="Habits-Icon-footer_cancel">取消</button>
      </Flex>
    </TargetDropDownDiv>
  );
}

//当天完成量组件

const CompleteACertainAmountOnTheSameDayBox = styled.div`
  width: 240px;
  border-radius: 5px;
  padding: 15px 10px 0 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  .Complete {
    .ant-form-item {
      margin-bottom: 5px;
    }
    .Complete-Day,
    .Complete-everytime {
      width: 75px;
      height: 25px;
      border-radius: 2px;
      background-color: #f3f4f7;
      border: none;
      margin-left: 13px;
      float: right;
    }
    .Complete-whenClockingIn {
      width: 100px;
      height: 20px;
      float: right;
      .ant-select-selector {
        font-size: 12px;
      }
    }
  }
  .Habits-Icon-footer {
    width: 100%;
    height: 50px;
    padding: 10px 0;

    .Habits-Icon-footer_determine,
    .Habits-Icon-footer_cancel {
      width: 100px;
      height: 25px;
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

export const CompleteACertainAmountOnTheSameDay = () => {
  return (
    <CompleteACertainAmountOnTheSameDayBox>
      <Form colon={false} className="Complete">
        <Form.Item label="每天" name="EveryDay">
          <Input className="Complete-Day"></Input>
          <Input className="Complete-Day"></Input>
        </Form.Item>
        <Form.Item label="打卡时" name="WhenClockingIn">
          <Select
            defaultValue="自动记录"
            className="Complete-whenClockingIn"
            options={[
              { value: "automaticRecording", label: "自动记录" },
              { value: "manualRecording", label: "手动记录" },
              { value: "completeItAll", label: "完成全部" },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item label="每次记录" name="EveryTimeYouRecord">
          <Input className="Complete-everytime"></Input>
        </Form.Item>
      </Form>
      <Flex
        className="Habits-Icon-footer"
        justify="space-around"
        wrap
        gap="small"
      >
        <button className="Habits-Icon-footer_determine">确定</button>
        <button className="Habits-Icon-footer_cancel">取消</button>
      </Flex>
    </CompleteACertainAmountOnTheSameDayBox>
  );
};

export default HabitsFormTarget;
