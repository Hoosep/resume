import React from "react";
import { Layout } from "antd";
import styled, { keyframes } from "styled-components";

// Own image
import Pattern from "../Shared/Images/pattern.png";

const { Content } = Layout;

const gradientColor = keyframes`
  0%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.4) 100%);
  }
  25%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.42) 100%);
  }
  50%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.45) 100%);
  }
  75%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.42) 100%);
  }
  100%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.4) 100%);
  }
/*   0%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.4) 100%);
  }
  25%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.42) 100%);
  }
  50%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.45) 100%);
  }
  75%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.42) 100%);
  }
  100%{
    background-image: linear-gradient(75deg, rgba(78,147,230, 0.6) 0%, rgba(134,75,227,0.4) 100%);
  } */
`;


const LayoutStyled = styled(Layout)`
  background-image: url(${Pattern});
  z-index: 0;
`;

const LayerLayout = styled.div`
  animation: ${gradientColor} 2s infinite;
`;

const MainLayout = ({ ...props }) => {
  const { children } = props;
  return (
    <LayoutStyled className="layout">
      <LayerLayout>
        <Content style={{ minHeight: "200px" }}>
          {children}
        </Content>
        {/* <Footer style={{
          background: "#000",
          color: "#FFF"
        }}>
          <Row>
            <Col xs={24}>
              <span className="d-block text-center">
                Made with ❤︎
              </span>
            </Col>
          </Row>
        </Footer> */}
      </LayerLayout>
    </LayoutStyled>
  );
};

export default MainLayout;