import styled from "styled-components"
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
    display: flex;
    line-height: 24px;
    font-weight: 500px;
    align-items: inherit;

    font-size: ${({ size }) => (size ? getValue(size) : "16px")};
    color: ${({ color }) => (color ? color : "var(--primaryColor)")};

    margin-top: ${({mt}) => getValue(mt)};
    margin-bottom: ${({mb}) => getValue(mb)};
    margin-right: ${({mr}) => getValue(mr)};
    margin-left: ${({ml}) => getValue(ml)};

    padding-top: ${({pt}) => getValue(pt)};
    padding-bottom: ${({pb}) => getValue(pb)};
    padding-right: ${({pr}) => getValue(pr)};
    padding-left: ${({pl}) => getValue(pl)};
`;

const Counter = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    width: 28px;
    height: 28px;

    background-color: #1890ff;
    border-radius: 50%;
    color: white;
    margin-left: 8px;
`;

export {Container, Counter};