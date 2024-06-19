"use client";
import { Button,ConfigProvider } from 'antd'
import React, {useEffect} from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_emyenzhveng.js', // 在 iconfont.cn 上生成
});



export default function Home() {


    // 窗口最小化
    const ZoomOut = ()=>{
        window.electron.minimizeWindows()

    }

    // 窗口最大化
    const Maximize = ()=>{
        window.electron.MaximizeWindows()
    }

    // 关闭窗口
    const CloseWindow = () =>{
        window.electron.CloseWindow()
    }

    return (
      <main>
          <nav>侧边栏</nav>
          <section>
              <div className="button_taber">
                  <div className="button_taber_right">
                      <ConfigProvider wave={{ disabled: true }}>
                          <Button icon={<MyIcon type="icon-suoxiao" />} className="button_taber_menu" onClick={ZoomOut}></Button>
                          <Button icon={<MyIcon type="icon-kuoda-copy" />} className="button_taber_menu" onClick={Maximize}></Button>
                          <Button icon={<MyIcon type="icon-htmal5icon21" />} className="button_taber_menu" onClick={CloseWindow}></Button>
                      </ConfigProvider>

                  </div>
              </div>
          </section>
      </main>


  );
}
