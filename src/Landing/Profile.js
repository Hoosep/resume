import React, { Fragment } from "react";
import { Row, Col } from "antd";
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
  font-size: 50px;
  transform-origin: left top 0;
  @media (min-width: 426px){
    font-size: 80px;
  }
`;

const Paragraph = styled.p`
  text-align: justify;
  font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
  font-size: 0.9rem;
  color: #333;
  font-weight: 300;
  text-align: justify;
  line-height: 1.2;

  @media (min-width: 426px){
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Profile = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center" id="profile">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <Title>Profile.</Title>
            </Col>
            <Col xs={24}>
              <Paragraph>
                <code>Hello World!</code> I'm José. Web developer with
                over 3 years of experience as Web developer.
              </Paragraph>
              <Paragraph>I'm responsible, dynamic and a creative person. I have skill to work as team and good communication. Very friendly and committed with my job.</Paragraph>
              <Paragraph>I don't just have a degree, I'm a professional and want to provide value in companies.</Paragraph>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Profile;