import styled from "styled-components";
import {Button, Col, Flex, Row} from "antd";


const HabitsIconBox = styled.div`
    width: 410px;
    height: 300px;
    background-color: #FFFFFF;
    border:1px solid #F4F4F4;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    .HabitsIcon-checked{
        width: 100%;
        height: 70px;
        padding:2px 15px;
        border-bottom: 2px solid #F4F4F4;
        .Habits-Icon-checked{
            width: 85px;
            height: 100%;
        }
        .Habits-Icon-checked div,p{
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: #9a6e3a;
            border-radius: 50%;
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
        }
    }
    
            .Habits-Icon-content{
                width: 100%;
                height:calc(100% - 140px);
                overflow: auto;
                box-sizing: border-box;
                padding: 0 15px;
                p{
                    width: 40px;
                    height: 40px;
                    text-align: center;
                    border-radius: 50%;
                    background-color: #9a6e3a;
                }
                
            }
            .Habits-Icon-content::-webkit-scrollbar{
                width: 5px;
                height: 8px;
            }
            .Habits-Icon-content::-webkit-scrollbar-thumb{
                border-radius: 10px;
                background: #d4d6d9;
            }
            .Habits-Icon-content::-webkit-scrollbar-track-piece{
                background-color: #fff;
                border-radius: 10px;
            }



    .Habits-Icon-footer{
        width: 100%;
        height: 70px;
        background-color: #3967FF;
    
        p{
            margin: 0 5px;
        }
        
    }
`

export default function HabitsIcon() {
    return (
        <HabitsIconBox>
            <div className="HabitsIcon-checked" >
                <Flex justify="space-between" align="center"  className="Habits-Icon-checked">
                    <p>图</p>
                    <p>文</p>
                </Flex>
            </div>
                <Flex className="Habits-Icon-content"  wrap justify="flex-start">
                    {Array.from({ length: 60 }, (_, i) => (
                        <p key={i}>
                            图
                        </p>
                    ))}

                </Flex>

            <Flex className="Habits-Icon-footer" justify="flex-end" wrap gap="small">
                <Button>确定</Button>
                <Button>取消</Button>
            </Flex>
        </HabitsIconBox>
    )
}