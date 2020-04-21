import React, { Fragment } from "react";
import { Row, Col } from "antd";
import {
  StarFilled
} from '@ant-design/icons';
import styled from "styled-components";

const RowStyled = styled(Row)`
  min-height: 100vh;
  padding: 2em;
  background-color: #FFF;
  border: 10px solid;
  border-image-source: linear-gradient(75deg,rgba(78,147,230,1) 0%,rgba(134,75,227,0.6) 100%);
  border-image-slice: 1;

  @media (min-width: 426px){
    padding: 0 2em;
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
  font-size: 36px;
  @media (min-width: 426px){
    font-size: 80px;
  }
`;

const ItemExperience = styled.div`
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

  & > h4 > span > span.position{
    font-weight: 700;
  }

  & > h4 > span > span.date{
    float: right;
  }

  & > p {
    font-family: "Montserrat";
    font-size: 0.9rem;
    color: #333;
    font-weight: 300;
    text-align: justify;
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
    width: 60%;
    margin: 0 auto;
  }
`;

const StarFilledtyled = styled(StarFilled)`
  display: block;
  font-size: 4rem;
  margin-bottom: 0.5em;
  color: rgba(78,147,230, 0.7);
`;

const Experience = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center" id="experience">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <Title>Experience.</Title>
            </Col>
            <Col xs={24}>
              <Row type="flex">
                <Col xs={24}>
                  <StarFilledtyled />
                </Col>
                <Col xs={24}>
                  <ItemExperience>
                    <h4>
                      PEGASUS CONTROL
                      <span>
                        <span className="position">Web Developer</span>
                        <span className="date">// Jan 2018 - Currently</span>
                      </span>
                    </h4>
                    <p>
                      - I am in a project called <a href="https://www.isentinel.com.mx/" target="_blank"  rel="noopener noreferrer">iSentinel Gas</a> where we
                      measure the gas level of your tank and we send you notifications to your mobile phone if we detect gas leaks or just events about your tank.
                    </p>
                    <p>
                      - I made a <a href="https://dashboard.isentinel.business/" target="_blank"  rel="noopener noreferrer">dashboard</a> which manages devices that connect in tanks to visualize leaks and loads.
                    </p>
                    <p>
                      - I made a <a href="http://panel-pro.development.casasyterrenos.com/" target="_blank"  rel="noopener noreferrer">dashboard</a> which manages real estates.
                    </p>
                    <p>
                      - I helped to improve a website called&nbsp;
                      <a href="https://www.ordil.mx/" target="_blank" rel="noopener noreferrer">Ordil</a>
                      .
                    </p>
                  </ItemExperience>
                  <ItemExperience>
                    <h4>
                      STX
                      <span>
                        <span className="position">Web Developer</span>
                        <span className="date">// Oct 2016 - Dec 2017</span>
                      </span>
                    </h4> 
                    <p>
                      - Creation of new project about how to control vehicle accesses called&nbsp;
                      <a href="http://ashi-app.com/" target="_blank" rel="noopener noreferrer">Ashi</a>
                      .
                    </p>
                  </ItemExperience>
                  <ItemExperience>
                    <h4>
                      AS FREE TIME
                    </h4>
                    <p>
                      - I made a calendar that it's based in a motivation technique to reach a goal.&nbsp;
                      <a href="https://dontbreakthehabit.herokuapp.com/" target="_blank" rel="noopener noreferrer">Don't break the habit</a>
                      .
                    </p>
                    <p>
                      - I improved a map about a the COVID progression.&nbsp;
                      <a href="https://hoosep.github.io/covidmap" target="_blank" rel="noopener noreferrer">COVID Progression</a>
                      .
                    </p>
                    <p>
                      - I made a directory for essential businesses to upload their contact information.&nbsp;
                      <a href="https://consume-local-29145.firebaseapp.com/" target="_blank" rel="noopener noreferrer">#ConsumeLocal</a> <a href="https://consume-local-29145.firebaseapp.com/cities/Manzanillo" target="_blank" rel="noopener noreferrer">#Cities</a>
                      .
                    </p>
                  </ItemExperience>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Experience;