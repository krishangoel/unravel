import { Layout } from "antd";
import { Link } from "react-router-dom";

import StyledLayout from "./style";

const { Header, Content, Footer } = Layout;

const DLayout = (props) => {
  return (
    <StyledLayout>
      <Header>
        <Link to={"/"}>
          <div className="logo">Budget Dashbaord</div>
        </Link>
      </Header>
      <Content className="site-layout">{props.children}</Content>
      <Footer style={{ textAlign: "center" }}> Design ©2022</Footer>
    </StyledLayout>
  );
};

export default DLayout;
