"use client";
import React from "react";
import locale from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ConfigProvider } from "antd";

export default function Home() {
  dayjs.locale("zh-cn");
  return <main className="App"></main>;
}
