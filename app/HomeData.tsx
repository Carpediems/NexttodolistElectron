import React from "react";
import { MyIcon } from "@/app/component/MyIcon";
// 导航栏固定数据源
export const HomeNavListData = [
  {
    HomeNavListIndex: 1,
    HomeNavListPath: "/Alltasks",
    HomeNavListComponent: <MyIcon type="icon-renwu"></MyIcon>,
  },
  {
    HomeNavListIndex: 2,
    HomeNavListPath: "/TomatoFocus",
    HomeNavListComponent: <MyIcon type="icon-shizhongfill"></MyIcon>,
  },
  {
    HomeNavListIndex: 3,
    HomeNavListPath: "/FourQuadrants",
    HomeNavListComponent: <MyIcon type="icon-quadrant"></MyIcon>,
  },
  // {
  //   HomeNavListIndex: 4,
  //   HomeNavListPath: "/Habits",
  //   HomeNavListComponent: <MyIcon type="icon-xiguanhangxian"></MyIcon>,
  // },
  // {
  //   HomeNavListIndex: 5,
  //   HomeNavListPath: "/Test",
  //   HomeNavListComponent: <MyIcon type="icon-renwu"></MyIcon>,
  // },
];

// 窗口缩小、放大、关闭数据源
export const HomeWindowsData = [
  {
    HomeWindowsIndex: 1,
    HomeWindowsComponent: <MyIcon type="icon-suoxiao"></MyIcon>,
    HomeWindowClickEvent: async () => window.electron.minimizeWindows(),
  },
  {
    HomeWindowsIndex: 2,
    HomeWindowsComponent: <MyIcon type="icon-kuoda-copy"></MyIcon>,
    HomeWindowClickEvent: async () => window.electron.MaximizeWindows(),
  },
  {
    HomeWindowsIndex: 3,
    HomeWindowsComponent: <MyIcon type="icon-htmal5icon21"></MyIcon>,
    HomeWindowClickEvent: async () => window.electron.CloseWindow(),
  },
];
