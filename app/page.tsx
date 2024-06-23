"use client";
import { Button,ConfigProvider } from 'antd'
import React from 'react';
import  { createFromIconfontCN } from '@ant-design/icons';
import Link from "next/link";
// import {useRouter} from "next/navigation";
const MyIcon = createFromIconfontCN({
    scriptUrl: 'iconfont/iconfont.js', // 在 iconfont.cn 上生成
});




export default function Home() {
    // const router = useRouter();

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

    // 所有任务
    // const AllTask = ()=>{
    //     router.push('/Alltasks')
    // }

    return (
        <main className="App">
            {/*<section>*/}
            {/*    <div className="button_taber">*/}
            {/*        <div className="taber_title"></div>*/}
            {/*        <div className="button_taber_right">*/}
            {/*            <ConfigProvider wave={{disabled: true}}>*/}
            {/*                <Button icon={<MyIcon type="icon-suoxiao"/>} className="button_taber_menu"*/}
            {/*                        onClick={ZoomOut}></Button>*/}
            {/*                <Button icon={<MyIcon type="icon-kuoda-copy"/>} className="button_taber_menu"*/}
            {/*                        onClick={Maximize}></Button>*/}
            {/*                <Button icon={<MyIcon type="icon-htmal5icon21"/>} className="button_taber_menu"*/}
            {/*                        onClick={CloseWindow}></Button>*/}
            {/*            </ConfigProvider>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>


    );
}
