import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    inset: 0;

    background-color: rgba(37, 62, 95, 0.5);
    z-index: 99999;
`;

const Wrapper = styled.div`
    margin: auto;
    margin-top: 40px;
    max-width: 900px;
    min-width: 200px;
    width: fit-content;
    /* height: 300px; */
    background-color: white;

    padding: 32px 48px 32px 48px;
    gap: 16px;
    border-radius: 8px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 32px;
`;

export {Container, Wrapper, Footer};