import styled from "styled-components";
import getValue from "../../hooks/getStyleValue";
import Title from "../Generics/Title";
import arrowUp from "../../assets/icons/arrowUp.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Talabalar":
      return {
        primary: "rgba(82, 196, 26, 1)",
        secondary: "rgba(183, 235, 143, 1)",
        ternary: "rgba(246, 255, 237, 1)",
      };
    case "Mentorlar":
      return {
        primary: "rgba(250, 219, 20, 1)",
        secondary: "rgba(255, 229, 143, 1)",
        ternary: "rgba(255, 251, 230, 1)",
      };
    case "Filiallar":
      return {
        primary: "rgba(24, 144, 255, 1)",
        secondary: "rgba(145, 213, 255, 1)",
        ternary: "rgba(230, 247, 255, 1)",
      };
  }
};

const Container = styled.div`
  padding: 24px;
  /* border-radius: 8px; */

`;

const Wrapper = styled.div`
    display: flex;
    gap: ${({gap}) => getValue(gap, "16px")};
    width: 100%;
`;

const Card = styled.div`
     display: flex;
  flex-direction: column;
  flex: 1;
  /* border: 1px solid red; */
  padding: 24px;
  padding-bottom: 0;
  gap: ${({ gap }) => getValue(gap, "16px")};
  background-color: ${({ title }) => getColor(title)?.ternary};
`;

const Section = styled(Wrapper)`
   display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    padding: 8px;
    background-color: ${({ title }) => getColor(title)?.primary};

    margin-right: 16px;
    & path {
      fill: white;
    }
  }
  .subicon {
    margin-right: 16px;
  }
  
`;

const Plus = styled.div`
  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;
    content: "+";
    color: white;
    font-weight: 600;
    font-size: 32px;
    background-color: ${({ title }) => getColor(title)?.secondary};

    border-radius: 50%;
  }
  &:active {
    transform: scale(0.97);
  }
  cursor: pointer;
`;

const Counter = styled(Title)`
  font-size: 40px;
`
const Arrow = styled(arrowUp)`
  margin-right: 13px;
  width: 24px;
  height: 24px;
`;

const SubCard = styled(Card)`
  padding-bottom: 24px;
  border-radius: 8px;
  border: 1px solid rgba(240, 240, 240, 1);
`;

export {Container, Wrapper, Card, Section, Plus, Counter, Arrow, SubCard};


