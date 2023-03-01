import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    font-size: 14px;
`;

export const Heading = styled.h2`
    margin-top: 10px;
    width: 280px;
    color: #000000;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;;
`;

export const Box = styled.div`
    max-width: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-grow: 1;
`;

export const Input = styled.input`
    margin: 5px;
`;