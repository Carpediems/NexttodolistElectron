"use client"
import {Button} from "antd";
import {createFromIconfontCN} from "@ant-design/icons";
import './TestDemo.scss'
import TitleBarfour from "../FourQuadrants/components/TitleBarfour";
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_j2qot69ija.js', // 在 iconfont.cn 上生成
});

export default function Page(){
    return(
        <main>
            <p><MyIcon type="icon-weiwanchengrenwu" className="MyIcon_btn"></MyIcon><span className="MyIcon_span">测试</span></p>
            <TitleBarfour></TitleBarfour>
        </main>

    )
}