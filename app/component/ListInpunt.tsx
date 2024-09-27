import {Input} from "antd";
import styled from "styled-components";
import React from "react";
const InputStyle = styled(Input)`
    border-radius: 0;
    border:none;
    &:focus{
        border-color:transparent;
        box-shadow: none;
    }
    &:hover{
        border:none
    }

`
export default function ListInpunt() {
    return(
        <InputStyle placeholder="准备做什么"></InputStyle>
    )
}