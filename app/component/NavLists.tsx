
import {Button, ConfigProvider} from "antd";
import Link from "next/link";
import React from "react";
import {createFromIconfontCN} from "@ant-design/icons";
const MyIcon = createFromIconfontCN({
    // scriptUrl: 'iconfont/iconfont.js', // 在 iconfont.cn 上生成
    scriptUrl:'iconfont/iconfont.js'
});

export default function NavLists(){
    return (
        <nav>
            <ul>
                <ConfigProvider wave={{disabled: true}}>

                    <li><Link href={"/Alltasks"}><Button icon={<MyIcon type="icon-renwu"/>}></Button></Link></li>
                    <li><Link href={"/TomatoFocus"}><Button icon={<MyIcon type="icon-shizhongfill"/>}></Button></Link></li>
                    <li><Link href={"/FourQuadrants"}><Button icon={<MyIcon type="icon-quadrant"/>}></Button></Link></li>
                    <li><Link href={'/Habits'}>习惯</Link></li>
                    <li><Link href={"/Test"}>测试</Link></li>

                </ConfigProvider>

            </ul>
        </nav>
    )
}