import {createFromIconfontCN} from "@ant-design/icons";
import styled from "styled-components";
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_j2qot69ija.js', // 在 iconfont.cn 上生成
});


const PBox = styled.div`
    //width: 100%;
    //height: 30px;
    //line-height: 30px;
    //font-size: 12px;
    p{
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        .MyIcon_btn{
            width: 16px;
            height: 16px;
            vertical-align: middle;
            display: inline-block;
        }
        .MyIcon_span{
            width: calc(100% - 21px);
            height: 30px;
            display: inline-block;
            text-indent: 5px;
            border-bottom:1px solid #F1F1F1;
            font-family:SJluoliheicu,Verdana,serif;
        }
    }

   
    
`


export default function TaskList(){
    return(
        <PBox>
            <p><MyIcon type="icon-weiwanchengrenwu" className="MyIcon_btn"></MyIcon><span
                className="MyIcon_span">测试</span></p>
        </PBox>


    )
}