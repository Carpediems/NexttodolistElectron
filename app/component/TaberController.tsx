import React from "react";
import { Button, ConfigProvider } from "antd";
import { HomeWindowsData } from "@/app/HomeData";

export default function TaberController() {
  return (
    <section>
      <div className="button_taber">
        <div className="taber_title"></div>
        <div className="button_taber_right">
          <ConfigProvider wave={{ disabled: true }}>
            {HomeWindowsData.map((item, index) => (
              <Button
                key={item.HomeWindowsIndex}
                icon={item.HomeWindowsComponent}
                onClick={item.HomeWindowClickEvent}
                className="button_taber_menu"
              ></Button>
            ))}
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
}
