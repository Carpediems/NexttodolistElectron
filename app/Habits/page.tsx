'use client'
import styled from "styled-components";
import {Button, Flex} from "antd";
import {createFromIconfontCN} from "@ant-design/icons";
import React from "react";
import HabitsDate from "@/app/Habits/components/HabitsDate";




// 图标
const MyIcon = createFromIconfontCN({
    scriptUrl: 'iconfont/iconfont.js', // 在 iconfont.cn 上生成
});


const HabitsBox = styled.main`
    width: calc(100% - 50px);
    height: calc(100% - 35px);
    .Habits-Left-box{
        width: 63%;
        height: 100%;
        background-color: #3967FF;
        .Habits-Timeline{
            width: 100%;
            height: 30px;
            background-color: #FAFAFA;
            .Habits-Timeline-Text{
                width: 50px;
                height: 30px;
            }
            .Habits-Timeline-iconText{
                width: 120px;
                height: 30px;
                .ant-btn{
                    height: 30px;
                    background-color: #FAFAFA;
                }
                .ant-btn:hover{
                    background-color: #ECECEC;
                }
            }
            .Habits-Timeline-Date{
                width: 100%;
                height: 100px;
                background-color: #FAFAFA;
                padding:10px 15px
            }
        }
    }

`


export default function HabitsPage() {
    return(
        <HabitsBox>
            <div className="Habits-Left-box">
                <div className="Habits-Timeline">
                    <Flex justify="space-between">
                        <h3 className="Habits-Timeline-Text">习惯</h3>
                        <Flex className="Habits-Timeline-iconText" justify="space-between">
                            <Button icon={<MyIcon type="icon-liebiao"/>}></Button>
                            <Button icon={<MyIcon type="icon-tianjia"/>}></Button>
                            <Button icon={<MyIcon type="icon-gengduo"/>}></Button>
                        </Flex>
                    </Flex>

                    <Flex justify="space-between" className="Habits-Timeline-Date">
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>
                        <HabitsDate></HabitsDate>

                    </Flex>
                </div>
            </div>

        </HabitsBox>
    )
}