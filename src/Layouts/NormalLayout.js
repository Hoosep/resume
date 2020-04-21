import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";

// Own component
import Navbar from "./Navbar";

const { Header, Content } = Layout;

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background: transparent;
  padding: 0 2em;

  @media (min-width: 426px){
    top: 1.5rem;
  }
`;


const NormalLayout = ({ ...props }) => {
  const { children } = props;
  return (
    <Layout>
      <HeaderStyled>
        <Row type="flex" justify="end">
          <Col>
            <Navbar />
          </Col>
        </Row>
      </HeaderStyled>
      <Content style={{ minHeight: "200px" }}>
        {children}
      </Content>
    </Layout>
  );
};

export default NormalLayout;