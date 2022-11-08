import { Table } from "antd";
import Styled from "styled-components";

const StyledTable = Styled(Table)`
`;

export const StyledTag = Styled.div`
    background: blue;
    border-radius: 20px;
    padding: 2px 12px;
    color: white;
    display: flex;
    margin-bottom: 2px;
    width: max-content;
`;


export const StyledEdit = Styled.div`
 cursor:pointer;
 color:blue;
`

export const StyledDelete = Styled.div`
 cursor:pointer;
 color:red;
`

export default StyledTable



