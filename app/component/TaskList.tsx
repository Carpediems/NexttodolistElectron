import styled from "styled-components";
import { Checkbox, Flex } from "antd";

const TaskListBox = styled(Flex)`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #f1f1f1;
  .ant-checkbox-wrapper {
    .ant-checkbox-input:hover {
      background-color: red;
    }
    .ant-checkbox-inner {
      border: 1.5px solid #a3a3a3;
      border-radius: 1px;
    }
  }
`;

export default function TaskList(props: any) {
  return (
    <TaskListBox align="center">
      <Checkbox>测试</Checkbox>
    </TaskListBox>
  );
}
