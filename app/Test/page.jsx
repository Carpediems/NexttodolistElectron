"use client"
import {createFromIconfontCN} from "@ant-design/icons";
import './TestDemo.scss'

import React from "react";
import HabitsIcon from "../Habits/components/HabitsFormComponents/HabitsIcon";

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_j2qot69ija.js', // 在 iconfont.cn 上生成
});

export default function Page(){
    const [modal1Open,setModal1Open] = React.useState(false);
    const ButtonDistance = ()=>()=>{
        setModal1Open(true)
        // @ts-ignore

    }
    return(
        <main style={{backgroundColor:"white"}}>
            <HabitsIcon></HabitsIcon>
            <div>测试</div>
            <div>ceshi</div>
        </main>

    )
}