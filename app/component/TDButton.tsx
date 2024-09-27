import {Button, ConfigProvider} from "antd";
import styled from "styled-components";
const ButtonGroup = styled(Button)`
    &:hover{
        background-color: #3967FF;
    }
    

`
export default function TDButton(){
    return(
            <ButtonGroup type="primary">点击</ButtonGroup>

    )
}