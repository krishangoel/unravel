import Styled from "styled-components"
import { Layout } from 'antd';

const StyledLayout = Styled(Layout)`

.ant-layout-header{
    background: #026AA7;
    display: flex;
    align-items: center;
    position: relative;
}
.ant-menu-dark.ant-menu-horizontal{
    background: #026AA7;
}
.ant-layout-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
.ant-layout-content {
    height: calc(100vh - 98px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 24px 12px 0 12px;
}
.logo{
    color: white;
    font-size: 28px;
    font-weight: 700;
}
.ant-layout-footer{
    padding: 6px 50px;
}
`;


export default StyledLayout