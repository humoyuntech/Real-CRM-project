import styled from "styled-components"
import arrow from "../../assets/icons/rightArrow.svg?react";
import exit from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
  transform: ${({ active }) => active === "true" && `rotate(90deg)`};
  transition: all 0.1s;
`;

const Container = styled.div`
    display: flex;
`;

const Side = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 280px;
    max-width: 280px;
    min-width: 280px;
    background-color: white;
    height: 100vh;
    overflow-y: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0;
    }
`;

const Body = styled.div`
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    height: 100vh;
`;

const Wrapper = styled.div`
     border-radius: 8px;
    margin: 16px;
    background-color: white;
`

const Logo = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: rgba(24, 144, 255, 1);
    padding: 16px 24px;
    border-bottom: 1px solid rgba(248, 250, 252, 1);
    cursor: pointer;

    background-color: white;
    position: sticky;
    top: 0;
    z-index: 9999;
`

const LogOut =styled(Logo)`
    display: flex;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid rgba(248, 250, 252, 1);
    border-bottom: none;
    position: sticky;
    bottom: 0;

    &:hover{
    background-color: #14AE5C;
    color: white;
    }
    transition: all 1.5s ease; 

`;
 //===============PROFILE

 const ProfileContaier =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 23px 24px 32px 24px;
 `

ProfileContaier.Image = styled.img`
    width:48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
`

ProfileContaier.Name = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: var(--primaryColor);

    width: 168px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis

`

ProfileContaier.Email = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: var(--secondaryColor);

    width: 168px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
`
//=============== Menu
const Menu =styled.div`
    display:flex;
    flex-direction: column;

`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: rgba(248, 250, 252, 1);
  }
  padding-right: 24px;
  text-decoration: none;

  background-color: ${({ active }) =>
    active === "true" && `rgba(248, 250, 252, 1)`};
  color: ${({ active }) =>
    active === "true" ? `var(--activeColor)` : `var(--primaryColor)`};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  size: 14px;
  line-height: 20px;
  padding: 12px 0 12px 24px;

  &:hover {
    color: var(--activeColor);
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && " var(--activeColor)"};
  }
  .icon {
    margin-right: 16px;
  }
`;

const ChildWrapper = styled.div`
  margin-left: 35px;
  height: ${({ active }) => (active === "true" ? "auto" : "0px")};
  overflow: hidden;
`;

const ExitIcon = styled(exit)`
  margin-right: 16px;
`;


export {Container, Side, Body, Wrapper, Logo, LogOut, ProfileContaier, Menu,  MenuItem, Arrow, ChildWrapper, ExitIcon }

