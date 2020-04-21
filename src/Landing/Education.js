import React, { Fragment } from "react";
import { Row, Col } from "antd";
import {
  BookFilled
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

const ItemEducation = styled.div`
  & > h4 {
    background: linear-gradient(75deg, rgba(78,147,230, 0.8) 0%, rgba(134,75,227,0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  & > h4 > span {
    font-weight: 400;
    font-size: 0.7rem;
    display: block;
  }

  & > p {
    font-family: "Montserrat";
    font-size: 0.9rem;
    color: #333;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  @media (min-width: 426px){
    & > h4 {
      font-size: 2.5rem;
    }
    & > h4 > span {
      font-size: 1.3rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px){
    text-align: center;
    width: 60%;
    margin: 0 auto;
    & > p {
      text-align: center;
    }
  }
`;

const BookFilledStyled = styled(BookFilled)`
  display: block;
  font-size: 4rem;
  margin-bottom: 0.5em;
  color: rgba(78,147,230, 0.7);
`;

const Education = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center" id="education">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <Title>Education.</Title>
            </Col>
            <Col xs={24}>
              <Row type="flex">
                <Col xs={24}>
                  <BookFilledStyled />
                </Col>
                <Col xs={24}>
                  <ItemEducation>
                    <h4>
                      PROGRAMMER ANALYST <span>// Jul 2009 - Jun 2012</span>
                    </h4> 
                    <p>Bachillerato Técnico No.8 <br/>Universidad de Colima</p>
                  </ItemEducation>
                  <ItemEducation>
                    <h4>
                      COMPUTER SCIENCE <span>// Ago 2012 - Jun 2016</span>
                    </h4> 
                    <p>Universidad de Colima</p>
                  </ItemEducation>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Education;