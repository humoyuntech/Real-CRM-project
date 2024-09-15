import styled from "styled-components";
import arrow from "../../assets/icons/rightArrow.svg?react";

const Wrapper = styled.div`
    padding: 24px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const Fragment = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftIcon = styled(arrow)`
transform: ${({ left }) => left && "rotate(180deg)"};
  cursor: pointer;
  &:active {
    & path {
      fill: var(--primaryColor);
    }
  }
    `;

export {Wrapper, Section, Fragment, LeftIcon}