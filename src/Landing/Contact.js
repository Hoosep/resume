import React, { Fragment } from "react";
import { Row, Col } from "antd";
import {
  EnvironmentFilled,
  MailFilled,
  MobileFilled
} from '@ant-design/icons';
import styled from "styled-components";

const RowStyled = styled(Row)`
  min-height: 100vh;
  padding: 0 2em;
  background-color: #FFF;
  border: 10px solid;
  border-image-source: linear-gradient(75deg,rgba(78,147,230,1) 0%,rgba(134,75,227,0.6) 100%);
  border-image-slice: 1;
  @media (min-width: 426px) and (max-width: 768px){
    padding: 2em;
  }
}
`;

const Title = styled.h1`
  font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  opacity: .1;
  text-align: center;
  font-size: 48px;
  @media (min-width: 426px){
    font-size: 80px;
  }
`;

const ItemContact = styled.div`
  & > .anticon{
    display: block;
    font-size: 2rem;
    margin-bottom: 0.1em;
    color: rgba(78,147,230, 0.9);
  }

  & > h4 {
    font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
    text-align: center;
    margin-bottom: 0.1em;
    font-weight: 600;
  }

  & > p {
    text-align: center;
    font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
    margin-bottom: 2rem;
  }

  @media (min-width: 426px){
    & > .anticon{
      font-size: 3rem;
    }
    & > h4 {
      font-size: 2rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }
`;

const Contact = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center" id="contact">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <Title>Contact.</Title>
            </Col>
            <Col xs={24}>
              <Row type="flex">
                <Col xs={24}>
                  <ItemContact>
                    <EnvironmentFilled />
                    <h4>Address</h4>
                    <p>Guadalajara, MEX.</p>
                  </ItemContact>
                </Col>
                <Col xs={24}>
                  <ItemContact>
                    <MailFilled />
                    <h4>Mail</h4>
                    <p>hoose.muu@gmail.com</p>
                  </ItemContact>
                </Col>
                <Col xs={24}>
                  <ItemContact>
                    <MobileFilled />
                    <h4>Phone</h4>
                    <p style={{marginBottom: 0}}>(314) 10 66 664</p>
                  </ItemContact>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Contact;