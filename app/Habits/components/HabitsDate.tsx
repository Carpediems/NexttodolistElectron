import styled from "styled-components";
import {Button, ConfigProvider, Flex} from "antd";
import {createFromIconfontCN} from "@ant-design/icons";
import React from "react";


// 图标
// const MyIcon = createFromIconfontCN({
//     scriptUrl: 'iconfont/iconfont.js', // 在 iconfont.cn 上生成
// });

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_p4uhha4sa7.js', // 在 iconfont.cn 上生成
});
const HabitsDateBox = styled.div`
    width: 50px;
    height: 80px;
    background-color: #FAFAFA;
    border-radius: 5px;
    :hover{
        background-color: #F4F4F4;
        font-weight: 1000;
    }
    .Habits-Date{
        width: 100%;
        height: 100%;
        padding:5px 0;
        p{
            width: 100%;
            height: 10px;
            font-size: 12px;
            text-align: center;
        }
        .Habits-icon{
            width:100%;
            height: 35px;
            font-size: 25px;
            background-color: #FAFAFA;
        }
    }

`

export default function HabitsDate(){
    return(
        <HabitsDateBox>
            <Flex justify="space-between"  vertical className="Habits-Date">
                <p>周二</p>
                <p>18</p>
                <ConfigProvider theme={{
                    components: {
                        Button: {
                            defaultHoverBg:'#F4F4F4'
                        }
                    }
                }}>
                    <Button className="Habits-icon">
                        <MyIcon type="icon-step5-copy"/>
                    </Button>
                </ConfigProvider>
            </Flex>
        </HabitsDateBox>
    )
}