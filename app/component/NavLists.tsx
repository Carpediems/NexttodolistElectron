import { Button, ConfigProvider } from "antd";
import Link from "next/link";
import React from "react";
import { HomeNavListData } from "@/app/HomeData";

export default function NavLists() {
  return (
    <nav>
      <ul>
        <ConfigProvider wave={{ disabled: true }}>
          {HomeNavListData.map((item) => (
            <li key={item.HomeNavListIndex}>
              <Link href={item.HomeNavListPath}>
                <Button icon={item.HomeNavListComponent}></Button>
              </Link>
            </li>
          ))}
          <li>
            <Link href={"/Habits"}>习惯</Link>
          </li>
          <li>
            <Link href={"/Test"}>测试</Link>
          </li>
        </ConfigProvider>
      </ul>
    </nav>
  );
}
