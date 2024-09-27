import {createFromIconfontCN} from "@ant-design/icons";
import {Button, ConfigProvider, Flex, Input, Modal} from "antd";
import styled from "styled-components";
import React, {useEffect} from "react";
import './TitleBarfour.scss'
import ListInpunt from "@/app/component/ListInpunt";
const MyIcon = createFromIconfontCN({
    scriptUrl: 'iconfont/iconfont.js', // 在 iconfont.cn 上生成
});

const HFiveBox = styled(Flex)`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding-right: 2px;
    p{
        width: 120px;
        height:30px;
        line-height: 30px;
        padding-left: 0;
        font-size: 14px;
        color: red;
        .iconfontC{
            display: inline-block;
            padding-right:5px;
            vertical-align: middle;
        }
    }
    .TD_add{
        height: 28px;
        border-radius: 2px;
    }
  
`
export default function TitleBarfour() {
    const [modal1Open,setModal1Open] = React.useState(false);
    const [modal2Open,setModal2Open] = React.useState([]);
    let ButtonX = null
    let ButtonY = null
    const ButtonDistance = ()=>(e:any)=>{
        const ButtonX:number = e.clientX
        const ButtonY:number = e.clientY
        setModal1Open(true)
        // @ts-ignore
        setModal2Open((prevItems:number) => [...prevItems, ButtonX,ButtonY]);

    }
    useEffect(()=>{
        ButtonX = modal2Open[0]
        ButtonY = modal2Open[1]
    },[modal2Open])
    return(
        <HFiveBox align="center"  wrap justify="space-between">
            <p>
                <MyIcon type="icon-class_1-copy" className="iconfontC"></MyIcon>
                重要且紧急
            </p>
            <ConfigProvider wave={{ disabled: true }} theme={{
                components:{
                    Button:{
                        defaultHoverBg:"#F1F1F1"
                    }
                },

            }}>
                 <Button icon={<MyIcon type="icon-tianjia" />}
                         className="TD_add"
                         onClick={ButtonDistance()}
                 >
                 </Button>

            </ConfigProvider>
            <Modal
                // @ts-ignore
                style={{top:ButtonY,left:ButtonX}}
                width="400px"
                height="500px"
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
                mask={false}
                footer={null}
                closable={false}
                wrapClassName={'wen-content'}
            >
                <div className="wen-data">
                    日期
                </div>
                <div className="wen-wencontent">
                    <ListInpunt></ListInpunt>
                    <p className="wen-add-content">
                        内容区
                    </p>
                    <div>
                        默认分类
                    </div>
                </div>

            </Modal>
        </HFiveBox>
    )
}