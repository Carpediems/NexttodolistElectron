import styled from "styled-components";
import {Button, ConfigProvider, Flex, Progress} from "antd";


const ClockBox =styled.div`
    width: 49%;
    height: 400px;
    border:2px solid #EAEAEA;
    display: inline-block;
    background-color: #FDFDFD;
    margin-left: 10px;
    padding:5px 0 10px 0;
    .clock_box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        flex-direction: column;
        margin: 0 auto;
        .Foucs_text{
            height: 40px;
            line-height: 40px;
            text-align: center;
            
        }
        .roudClock{
            width: 70%;
            height: 70%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            margin: 0 auto;
        } 
        .Foucs_buttonGroup{
            width: 100%;
            padding:0 40px;
            .ant-btn{
                border: none;
                width: 80px;
                color: white;
            }
        }
    }
`

export default function FoucsClock() {

    return(
        <ClockBox>
            <div className="clock_box">
                <p className="Foucs_text">番茄专注1</p>
                    <Flex gap="small" wrap justify="center" align="center">
                        <Progress  strokeWidth={2} type="circle" size={250} percent={60} format={(percent) => `${percent}`} />
                    </Flex>
                <Flex gap="large" justify="space-between" align="center" className="Foucs_buttonGroup">
                    <ConfigProvider wave={{ disabled: true }}>
                        <Button  style={{backgroundColor:"#1677FF"}}>开始</Button>
                        <Button style={{backgroundColor:"#1677FF"}}>暂停</Button>
                        <Button   style={{backgroundColor:"red"}}>结束</Button>
                    </ConfigProvider>
                </Flex>


            </div>
        </ClockBox>
    )
}