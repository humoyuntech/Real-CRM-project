import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(37, 62, 95, 0.5);
    z-index: 99999;
/* 
    width: 100%;
    height: 100vh; */
`;

const Wrapper = styled.div`
    margin: auto;
    margin-top: 78px;
    max-width: 900px;
    min-width: 200px;
    width: fit-content;
    height: 300px;
    background-color: white;

    padding: 32px 48px 32px 48px;
    gap: 16px;
    border-radius: 8px;
`;

export {Container, Wrapper};