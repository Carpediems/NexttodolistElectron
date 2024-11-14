"use client";
import "./FourQuadrants.scss";
import TaskList from "../component/TaskList";
import { Flex } from "antd";
import { useState } from "react";
import TitleBarFour from "./components/TitleBarFour/TitleBarfour";
export default function FourQuadrants() {
  const [content, setContent] = useState("测试");
  const TitleBarOne = "重要不紧急";

  return (
    <main className="FourQuadrants">
      <h3>四象限</h3>
      <Flex className="FourQuadrants_box_four" justify="space-around" wrap>
        <div className="FourQuadrants_box">
          <TitleBarFour TitleBarOne="重要不紧急"></TitleBarFour>
          <div className="content_taskList">
            <TaskList content="测试"></TaskList>
          </div>
        </div>
        <div className="FourQuadrants_box">
          <h5 style={{ color: "#FFB000" }}>重要不紧急</h5>
        </div>
        <div className="FourQuadrants_box">
          <h5 style={{ color: "#4772FA" }}>不重要但紧急</h5>
        </div>
        <div className="FourQuadrants_box">
          <h5 style={{ color: "#0CCE9C" }}>不重要不紧急</h5>
        </div>
      </Flex>
    </main>
  );
}
