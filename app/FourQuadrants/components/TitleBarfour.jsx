import {createFromIconfontCN} from "@ant-design/icons";
import {Button} from "antd";
import styled from "styled-components";

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_uf8742vfyk.js', // 在 iconfont.cn 上生成
});

const HFiveBox = styled.h5`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    box-sizing: border-box;
    padding-right: 20px;

    p{
        width: 120px;
        height:30px;
        line-height: 30px;
        padding-left: 0;
        .iconfontC{
            display: inline-block;
            padding-right:5px;
            vertical-align: middle;
        }
    }
`
export default function TitleBarfour() {
    return(
        <HFiveBox>
            <p>
                <MyIcon type="icon-class_1-copy" className="iconfontC"></MyIcon>
                重要且紧急
            </p>
            <Button icon={<MyIcon type="icon-tianjia" />}></Button>
        </HFiveBox>
    )
}