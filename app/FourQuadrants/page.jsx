"use client"
import './FourQuadrants.scss'
import {createFromIconfontCN} from "@ant-design/icons";
import TaskList from "../component/TaskList";
import TitleBarfour from "./components/TitleBarfour";
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_1q2711p36td.js', // 在 iconfont.cn 上生成
});
export default function FourQuadrants(){
    return(
        <main className="FourQuadrants">
            <h3>四象限</h3>
            <div className="FourQuadrants_box_four">
                <div className="FourQuadrants_box">
                    {/*<h5 style={{color: "#FF5F68"}}>*/}
                    {/*    <MyIcon type="icon-class_1-copy"></MyIcon>*/}
                    {/*    重要且紧急*/}
                    {/*</h5>*/}
                    <TitleBarfour></TitleBarfour>
                    <div className="content_taskList">
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>
                        <TaskList></TaskList>

                    </div>
                </div>
                <div  className="FourQuadrants_box">
                    <h5 style={{color: "#FFB000"}}>重要不紧急</h5>
                </div>
                <div  className="FourQuadrants_box">
                    <h5 style={{color: "#4772FA"}}>不重要但紧急</h5>
                </div>
                <div  className="FourQuadrants_box">
                    <h5 style={{color: "#0CCE9C"}}>不重要不紧急</h5>
                </div>
            </div>

        </main>
    )
}