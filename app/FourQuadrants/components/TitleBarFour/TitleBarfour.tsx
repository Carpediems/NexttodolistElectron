import { Button, ConfigProvider, DatePicker, Flex, Input, Modal } from "antd";
import React, { useEffect } from "react";
import "./TitleBarfour.scss";
import ListInpunt from "@/app/component/ListInpunt";
import { MyIcon } from "@/app/component/MyIcon";

export default function TitleBarFour(props: any) {
  //   弹窗位置和是否显示
  let ButtonX = null;
  let ButtonY = null;
  const [FourQuadrant, setFourQuadrant] = React.useState(false);
  const [modal2Open, setModal2Open] = React.useState([]);
  const ButtonDistance = () => (e: any) => {
    const ButtonX: number = e.clientX;
    const ButtonY: number = e.clientY;
    setFourQuadrant(true);
    // @ts-ignore
    setModal2Open((prevItems: number) => [...prevItems, ButtonX, ButtonY]);
  };
  useEffect(() => {
    ButtonX = modal2Open[0];
    ButtonY = modal2Open[1];
  }, [modal2Open]);

  return (
    <Flex align="center" wrap justify="space-between" className="titleBarFour">
      <p>
        <MyIcon type="icon-class_1-copy" className="iconfontC"></MyIcon>
        {props.TitleBarOne}
      </p>
      <ConfigProvider
        wave={{ disabled: true }}
        theme={{
          components: {
            Button: {
              defaultHoverBg: "#F1F1F1",
            },
          },
        }}
      >
        <Button
          icon={<MyIcon type="icon-tianjia" />}
          className="TD_add"
          onClick={ButtonDistance()}
        ></Button>
      </ConfigProvider>
      <Modal
        // @ts-ignore
        style={{ top: ButtonY, left: ButtonX }}
        width="400px"
        height="500px"
        open={FourQuadrant}
        onOk={() => setFourQuadrant(false)}
        onCancel={() => setFourQuadrant(false)}
        mask={false}
        footer={null}
        closable={false}
        wrapClassName={"wen-content"}
      >
        <Flex className="wen-data" align="center">
          <div className="wen-data-picker">
            <MyIcon type="icon-rili" className="wen-data-picker-icon" />
            日历与提醒
          </div>
        </Flex>
        <div className="wen-wencontent">
          <ListInpunt></ListInpunt>
          <p className="wen-add-content">内容区</p>
          <div>默认分类</div>
        </div>
      </Modal>
    </Flex>
  );
}
