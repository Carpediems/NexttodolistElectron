import { Flex, Input, Select } from "antd";
import styled from "styled-components";

/**
 * 按天组件
 */
const FormRateBox = styled.div`
  width: 100%;
  height: 100%;
  p {
    height: 20px;
    font-size: 12px;
    color: #a9a9a9;
    line-height: 20px;
    margin: 10px 0;
  }
  .Form-Rate-Day-every {
    div {
      width: 30px;
      height: 30px;
      background-color: #4772fa;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      color: white;
      cursor: pointer;
    }
  }
`;

export const FormRateDay = () => {
  return (
    <FormRateBox className="Form-Rate-Day">
      <p>在这些天</p>
      <Flex justify="flex-start" gap={5} className="Form-Rate-Day-every">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i}>{i}</div>
        ))}
      </Flex>
    </FormRateBox>
  );
};

/**
 * 按周组件
 */
const FormRateWeekBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 0 0 5px;
  .ant-select {
    margin: 0 5px;
    width: 70px;
    height: 20px;
  }
`;

export const FormRateWeek = () => {
  const WeekData = [
    { value: "One", label: "1" },
    { value: "Two", label: "2" },
    { value: "Three", label: "3" },
    { value: "Four", label: "4" },
    { value: "Five", label: "5" },
    { value: "Six", label: "6" },
    { value: "Seven", label: "7" },
  ];

  return (
    <FormRateWeekBox>
      <span>每周</span>
      <Select defaultValue="1" options={WeekData}></Select>
      <span>天</span>
    </FormRateWeekBox>
  );
};

/**
 * 按时间间隔
 */

const FormRateIntervalBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 5px;

  .ant-input {
    margin: 0 5px;
    width: 80px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    background-color: #f3f4f7;
  }
  .ant-input:focus {
    background-color: white;
    border-color: #d9d9d9;
    box-shadow: none;
  }
  .ant-input:hover {
    border-color: #d9d9d9;
  }
`;

export const FormRateInterval = () => {
  return (
    <FormRateIntervalBox>
      <span>每</span>
      <Input defaultValue="2"></Input>
      <span>天</span>
    </FormRateIntervalBox>
  );
};
