import React, { Fragment } from "react";
import { Row, Col } from "antd";
import {
  DesktopOutlined
} from '@ant-design/icons';
import styled from "styled-components";

const RowStyled = styled(Row)`
  min-height: 100vh;
  padding: 0 2em;
  background-color: #FFF;
  border: 10px solid;
  border-image-source: linear-gradient(75deg,rgba(78,147,230,1) 0%,rgba(134,75,227,0.6) 100%);
  border-image-slice: 1;
}
`;

const Title = styled.h1`
  font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  opacity: .1;
  text-align: center;
  font-size: 38px;
  @media (min-width: 426px){
    font-size: 80px;
  }
`;
const ItemSoftware = styled.div`
  & > p {
    font-family: "Montserrat";
    font-size: 0.9rem;
    color: #333;
    font-weight: 300;
    text-align: center;
    line-height: 1.2;
  }

  & > ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  & > ul > li {
    text-align: center;
    /* display: inline-block;
    width: 50%; */
    flex-basis: 50%;
    font-weight: 700;
    margin-bottom: 0.8rem;
    background: linear-gradient(75deg,rgba(78,147,230,0.8) 0%,rgba(134,75,227,0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & > ul > li:last-child{
    flex-basis: 100%;
  }

  @media (min-width: 426px){
    & > ul > li {
      font-size: 2rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px){
    width: 60%;
    margin: 0 auto;
    & > ul > li:last-child{
      flex-basis: 50%;
    }
  }
`;

const DesktopOutlinedStyled = styled(DesktopOutlined)`
  display: block;
  font-size: 4rem;
  margin-bottom: 0.5em;
  color: rgba(78,147,230, 0.7);
`;

const Software = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center" id="software">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <Title>Techs.</Title>
            </Col>
            <Col xs={24}>
              <Row type="flex">
                <Col xs={24}>
                  <DesktopOutlinedStyled />
                </Col>
                <Col xs={24}>
                  <ItemSoftware>
                    <p>I have used different technologies such as</p>
                    <ul>
                      <li>ReactJS</li>
                      <li>jQuery</li>
                      <li>Flask</li>
                      <li>Ant Design</li>
                      <li>Bootstrap</li>
                      <li>PHP</li>
                      <li>AWS (S3, DynamoDB)</li>
                    </ul>
                  </ItemSoftware>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Software;