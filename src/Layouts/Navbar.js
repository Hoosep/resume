import React, { useState, Fragment, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { Menu, Drawer, Row, Col } from "antd";
import styled from "styled-components";
import { MenuOutlined } from '@ant-design/icons';


const LinkStyled = styled(Link)`
  color: #FFF;
  &:hover,
  &:focus,
  &:visited {
    color: #FFF;
  }
`;

const MenuStyled = styled(Menu)`
  border-bottom:none;
  background: transparent;
  .ant-menu-item {
    border-bottom: none;
  }
  &.ant-menu-vertical {
    border-right: none;
  }
  .ant-menu-item-selected {
    background-color:transparent!important;
  }
  &.ant-menu-vertical > .ant-menu-item:first-child{
    margin-top: 0;
  }
  &.ant-menu-vertical > .ant-menu-item {
    font-family: 'Montserrat',"Helvetica","Arial",sans-serif;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 1.4rem
  }
`;

const MenuItemStyled = styled(Menu.Item)`
  font-weight: 700;
  border-bottom: none;
  color: white!important;

  a {
    display: unset!important;
    letter-spacing: 1px;
    font-size: 1.1em;
    color: white!important;
    font-weight: bold;
  }

  a:hover{
    margin-bottom: 4px;
    border-bottom: 3px solid black;
  }
  &:active{
    background: unset;
  }
  &:hover{
    border-bottom:none!important;
  }
`;


const MenuOutlinedStyled = styled(MenuOutlined)`
  font-weight: 800;
  font-size: 1.2rem;
  color: #186fa2!important;
  display: ${props => props.show ? "inline-block" : "none" };


  @media (min-width: 426px){
    font-size: 3rem;
  }
`


const DrawerStyled = styled(Drawer)`
  & .ant-drawer-content {
    /*background-color: #186fa2;*/
    background-image: linear-gradient(75deg, rgba(78,147,230, 1) 0%, rgba(134,75,227,1) 100%);
  }
  .ant-drawer-close {
    color: white;
  }

  .ant-drawer-body {
    padding: 0;
    overflow: hidden;
  }
`;


const RowStyled = styled(Row)`
  min-height: 100vh;
  padding: 0 2em;
  color: #FFF;
`;

const Navbar = props => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  useEffect(() => {
    const onScroll = e => {
      let heightDevice = document.documentElement.clientHeight;
      let scrollTop = e.target.documentElement.scrollTop;
      setShowIcon(scrollTop >= heightDevice);
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Fragment>
      <MenuOutlinedStyled 
        onClick={toggleDrawer}
        show={showIcon ? 1 : 0 } />
      <DrawerStyled
        placement="left"
        onClose={toggleDrawer}
        visible={showDrawer}
        width="100%">
        <RowStyled type="flex" align="middle" justify="center">
          <Col xs={24}>
            <MenuStyled theme="light" mode="vertical">
              <MenuItemStyled key="1" onClick={toggleDrawer}>
                <LinkStyled to="/#profile">
                PROFILE
                </LinkStyled>
              </MenuItemStyled>
              <MenuItemStyled key="3" onClick={toggleDrawer}>
                <LinkStyled to="/#education">
                  EDUCATION
                </LinkStyled>
              </MenuItemStyled>
              <MenuItemStyled key="4" onClick={toggleDrawer}>
                <LinkStyled to="/#experience">
                  EXPERIENCE
                </LinkStyled>
              </MenuItemStyled>
              <MenuItemStyled key="5" onClick={toggleDrawer}>
                <LinkStyled to="/#software">
                  SOFTWARE
                </LinkStyled>
              </MenuItemStyled>
              <MenuItemStyled key="2" onClick={toggleDrawer}>
                <LinkStyled to="/#contact">
                  CONTACT
                </LinkStyled>
              </MenuItemStyled>
            </MenuStyled>
          </Col>
        </RowStyled>
      </DrawerStyled>
    </Fragment>
  );
}

export default Navbar;