"use client"
import './TomatoFocus.scss'
import {Button} from "antd";
import FoucsClock from "@/app/TomatoFocus/components/FoucsClock";
export default function TomatoFocus(){
    return(
        <main className="TomatoFoucs">
            <div className="TomatoFoucs_Left">
                <h3>
                    <p>番茄专注</p>
                    <div className="TomatoFoucs_Left_ButtonGroup">
                        <Button>坚持中</Button>
                        <Button>已归档</Button>
                    </div>
                </h3>
                <div className="ClockGroup">
                    <FoucsClock></FoucsClock>
                    <FoucsClock></FoucsClock>
                </div>

            </div>
        </main>
    )
}