import React, { Fragment } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col } from "antd";
import {
  LinkedinOutlined,
  WhatsAppOutlined,
  GithubOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import styled, { keyframes } from "styled-components";

const RowStyled = styled(Row)`
  min-height: 100vh;
  padding: 0 2em;
  color: #FFF;
`;

const Name = styled.h1`
  font-family: 'Montserrat', "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  @media (min-width: 1024px){
    font-size: 4rem;
  }
`;

const Position = styled.span`
  display:block;
  font-weight: 400;
  text-transform: none;
  color: #FFF;
  font-size: 0.8rem;
  letter-spacing: 0;
  @media (min-width: 1024px){
    font-size: 1.5rem;
  }
`

const ImageProfile = styled.img.attrs(props => ({
  src: "https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/78386705_10215904223305276_9053211995297284096_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHnbzXCc4fwJwBOzO0foep4ea84GvWAJ5B5rzga9YAnkIhaELDgIIsAvTL-b_UnxOI&_nc_ohc=gkSAeCX1zQkAX_06B8o&_nc_ht=scontent.fgdl5-1.fna&oh=8663b988a567c628118d1ddee059988a&oe=5EC2588B",
  alt: "Profile"
}))`
  display: block;
  width: 200px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  border: 4px solid #fafafa;
  @media (min-width: 1024px){
    width: 300px;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.3rem;
  li {
    display: inline-block;
    margin: 0 5px;
  }

  li a {
    color: rgba(255,255,255, 0.4);
  }

  li a:hover,
  li a:active,
  li a:focus {
    color: rgba(255,255,255, 1);
  }
  @media (min-width: 1024px){
    ul {
      font-size: 2.5rem;
      margin-top: 1rem;
    }
  }
`;

const ArrowContainer = styled.div`
  margin-top: 3rem;
  position: absolute;
  width: 100%;
`;

const slideDown = keyframes`
  0% {
    opacity: 0;
    top: 0;
  }
  75% {
    top: 10px;
    opacity: 1;
  } 
  100% {
    top: 0;
    opacity: 0;
  }
`;

const ArrowDownOutlinedStyled = styled(ArrowDownOutlined)`
  position: relative;
  display: block;
  font-size: 1rem;
  animation: ${slideDown} 2s ease-in-out infinite;
  @media (min-width: 1024px){
    font-size: 2rem;
  }
`

const LinkStyled = styled(Link)`
  color: #FFF;
  &:hover,
  &:focus,
  &:visited {
    color: #FFF;
  }
`;


const Main = props => {
  return (
    <Fragment>
      <RowStyled type="flex" align="middle" justify="center">
        <Col xs={24}>
          <Row type="flex">
            <Col xs={24}>
              <ImageProfile />
            </Col>
          </Row>
          <Row type="flex">
            <Col xs={24}>
              <Name>
                José Vaca
                <Position>Web Developer</Position>
              </Name>
            </Col>
          </Row>
          <Row type="flex">
            <Col xs={24}>
              <SocialList>
                <li>
                  <a href="https://wa.me/5213141066664" target="_blank" rel="noopener noreferrer">
                    <WhatsAppOutlined/>
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/hoosemuu" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hoosep?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <GithubOutlined />
                  </a>
                </li>
              </SocialList>
            </Col>
          </Row>
          <Row type="flex">
            <Col xs={24}>
              <LinkStyled to="/#profile">
                <ArrowContainer>
                    <ArrowDownOutlinedStyled />
                </ArrowContainer>
              </LinkStyled>
            </Col>
          </Row>
        </Col>
      </RowStyled>
    </Fragment>
  )
}

export default Main;